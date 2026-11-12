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
		"content": `<style>.hdcn_s_df {
  d: path("M20 10L4 10L9.5 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tm1rg8bbr {
  d: path("M4 14L20 14L14.5 20");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="hdcn_s_df"/><path class="tm1rg8bbr"/></g>`,
		"fallback": "solar:transfer-horizontal-line-duotone",
	});
}

export default Component;
