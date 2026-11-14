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

.pzk555bgy {
  d: path("M3.773 19.25a9.5 9.5 0 1 1 16.454 0");
}

.tabspwbie {
  d: path("M12 8.5s-3 3.25-3 5.25a3 3 0 0 0 6 0c0-2-3-5.25-3-5.25");
}
</style><g class="hntgybcog"><path class="pzk555bgy"/><path class="tabspwbie"/></g>`,
		"fallback": "uix:liquidity-gauge",
	});
}

export default Component;
