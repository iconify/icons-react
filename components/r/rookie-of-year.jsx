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

.l28eh75vl {
  d: path("M6 3h12v6A6 6 0 0 1 6 9Z");
}

.nkiu1ebtf {
  d: path("m12.375 6.75l.024.064a1.44 1.44 0 0 0 1.351.936a.414.414 0 0 1 .293.707l-.192.192a1.5 1.5 0 0 0-.395 1.425l.044.176a.38.38 0 0 1-.589.401l-.039-.028a1.5 1.5 0 0 0-1.744 0l-.039.028a.38.38 0 0 1-.589-.401l.044-.176a1.5 1.5 0 0 0-.395-1.425l-.192-.192a.414.414 0 0 1 .293-.707a1.44 1.44 0 0 0 1.351-.936l.024-.064a.401.401 0 0 1 .75 0M6 5H4.5a2 2 0 0 0 0 4H6m12-4h1.5a2 2 0 0 1 0 4H18m-6 6v5m-4 0h8");
}
</style><g class="hntgybcog"><path class="l28eh75vl"/><path class="nkiu1ebtf"/></g>`,
		"fallback": "uix:rookie-of-year",
	});
}

export default Component;
