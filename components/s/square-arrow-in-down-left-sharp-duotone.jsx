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
		"content": `<style>.dl_n0-bws {
  stroke-opacity: 0.4;
  d: path("M10 7L3 7L3 21L17 21L17 14");
}

.do5x66b_h {
  d: path("M21.2929 2.7071L13.1464 10.8536M22 11L13 11L13 2");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="gp_8x1bzb"><path class="dl_n0-bws"/><path class="do5x66b_h"/></g>`,
		"fallback": "keyline-icons:square-arrow-in-down-left-sharp-duotone",
	});
}

export default Component;
