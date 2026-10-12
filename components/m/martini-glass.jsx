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

.kj_mx-nxe {
  d: path("M4.25 4.25h15.5q1 0 .29.71l-7.33 7.33q-.71.71-1.42 0L3.96 4.96q-.71-.71.29-.71M12 13v8.25m-3.75 0h7.5");
}

.odpsdxyup {
  cx: 12px;
  cy: 8.25px;
  r: 1.25px;
}
</style><g class="hntgybcog"><path class="kj_mx-nxe"/><circle class="odpsdxyup"/></g>`,
		"fallback": "iconoven:martini-glass",
	});
}

export default Component;
