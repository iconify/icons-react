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

.oxy9ir50k {
  d: path("m15 16.5l3 3l3-3");
}

.quxzo_a_a {
  d: path("M2.5 4.5h19m-19 15h19M6 4.5c0 8 12 5.5 12 15");
}
</style><g class="hntgybcog"><path class="quxzo_a_a"/><path class="oxy9ir50k"/></g>`,
		"fallback": "uix:transfer-line",
	});
}

export default Component;
