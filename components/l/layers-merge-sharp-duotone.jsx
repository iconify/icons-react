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
		"content": `<style>.b4werybxu {
  d: path("M12 1L12 13M7.7071 8.7071L12 13L16.2929 8.7071");
}

.drdl_xbwe {
  stroke-opacity: 0.4;
  d: path("M1.4819 11.7151L12 17.5L22.5181 11.7151M1.4819 16.2151L12 22L22.5181 16.2151");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="gp_8x1bzb"><path class="drdl_xbwe"/><path class="b4werybxu"/></g>`,
		"fallback": "keyline-icons:layers-merge-sharp-duotone",
	});
}

export default Component;
