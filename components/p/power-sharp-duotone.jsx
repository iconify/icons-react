import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f8u2w-9tv {
  stroke-opacity: 0.4;
  d: path("M18.0886 4.0045L18.82 4.6865C20.8483 6.5779 22 9.2267 22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 9.2267 3.1517 6.5779 5.18 4.6865L5.9114 4.0045");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q5pxg1pze {
  d: path("M12 1L12 10.7563");
}
</style><g class="gp_8x1bzb"><path class="f8u2w-9tv"/><path class="q5pxg1pze"/></g>`,
		"fallback": "keyline-icons:power-sharp-duotone",
	});
}

export default Component;
