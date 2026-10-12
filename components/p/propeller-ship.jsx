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
		"content": `<style>.e-2-i017w {
  cx: 12px;
  cy: 12px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-3rp7dyv {
  d: path("M12 12C5.21.92 18.79.92 12 12m0 0c13-.34 6.2 11.43 0 0m0 0c-6.2 11.43-13-.34 0 0");
}
</style><g class="hntgybcog"><path class="r-3rp7dyv"/><circle class="e-2-i017w"/></g>`,
		"fallback": "iconoven:propeller-ship",
	});
}

export default Component;
