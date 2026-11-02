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
		"content": `<style>.gkxwt_b1d {
  stroke-opacity: 0.4;
  d: path("M15 10v8l6-4z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yhdsbe0jv {
  d: path("M3 6h18M3 12h8m-8 6h8");
}
</style><g class="nrj6p8qat"><path class="gkxwt_b1d"/><path class="yhdsbe0jv"/></g>`,
		"fallback": "coolicons:playlist-duocolor-sharp",
	});
}

export default Component;
