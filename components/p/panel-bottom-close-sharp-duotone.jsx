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
		"content": `<style>.cat56tugw {
  d: path("M8.7071 7.7071L12 11L15.2929 7.7071");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hifn7hyur {
  stroke-opacity: 0.4;
  d: path("M3 3L21 3L21 21L3 21L3 3ZM3 15L21 15");
}
</style><g class="gp_8x1bzb"><path class="hifn7hyur"/><path class="cat56tugw"/></g>`,
		"fallback": "keyline-icons:panel-bottom-close-sharp-duotone",
	});
}

export default Component;
