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

.pse-mlsnq {
  d: path("M2.75 15.75c3 1.25 9 1.5 13 1m-13 3.75q2.25-1.125 4.5 0c2.25 1.125 3 .75 4.5 0s3 .75 4.5 0");
}

.sf0hycc7f {
  d: path("m7.25 7.5l-.75 4l3.25 2.25l-.75 2.5M7.25 7.5L13 9m-6.5 2.5l-2 4.5M13 9l8.25-4.75");
}

.t8yaf7baj {
  cx: 6.5px;
  cy: 4.5px;
  r: 1.75px;
}
</style><g class="hntgybcog"><circle class="t8yaf7baj"/><path class="sf0hycc7f"/><path class="pse-mlsnq"/></g>`,
		"fallback": "iconoven:water-ski",
	});
}

export default Component;
