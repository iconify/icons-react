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
		"content": `<style>.adxensbci {
  d: path("M12 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 1 1 0 -13M9.5 14.5V22l2.5 -2.5 2.5 2.5v-7.5");
}

.e0q5_ylwf {
  d: path("M12 6.5V11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux-gk6uae {
  d: path("M15 5v6");
}

.yzggow1fx {
  d: path("M9 8v3");
}
</style><g class="hntgybcog"><path class="adxensbci"/><path class="yzggow1fx"/><path class="e0q5_ylwf"/><path class="ux-gk6uae"/></g>`,
		"fallback": "iconmind:tiered-reward-outline-thin",
	});
}

export default Component;
