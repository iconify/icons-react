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
		"content": `<style>.eca7s2b9z {
  d: path("M9.5 8.7V5.25a2.5 2.5 0 0 1 5 0V8.7a3.75 3.75 0 1 1-5 0m2.5 1.8V6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kk6g3bbbu {
  d: path("M2.75 20.5c1.54 0 1.54-1 3.08-1s1.55 1 3.09 1s1.54-1 3.08-1s1.54 1 3.08 1s1.55-1 3.09-1s1.54 1 3.08 1");
}

.zur2nlbbt {
  cx: 12px;
  cy: 11.5px;
  r: 1.25px;
}
</style><g class="hntgybcog"><path class="eca7s2b9z"/><circle class="zur2nlbbt"/><path class="kk6g3bbbu"/></g>`,
		"fallback": "iconoven:water-temperature",
	});
}

export default Component;
