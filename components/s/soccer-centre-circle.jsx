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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pseu05ulv {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m4.5 0h.01");
}

.sbwv6ubsq {
  d: path("M5.125 4.5h13.75A2.625 2.625 0 0 1 21.5 7.125v9.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 16.875v-9.75A2.625 2.625 0 0 1 5.125 4.5M12 4.5v15");
}
</style><g class="hntgybcog"><path class="sbwv6ubsq"/><path class="pseu05ulv"/></g>`,
		"fallback": "uix:soccer-centre-circle",
	});
}

export default Component;
