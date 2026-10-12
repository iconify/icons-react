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
		"content": `<style>.aj6v90bht {
  cx: 12px;
  cy: 9.75px;
  r: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.na6r2ab0k {
  d: path("M4.75 21.25V10a7.25 7.25 0 0 1 14.5 0v11.25Zm0-5.5h14.5m-7.25 0v5.5m-3.75-5.5v5.5m7.5-5.5v5.5");
}
</style><g class="hntgybcog"><path class="na6r2ab0k"/><circle class="aj6v90bht"/></g>`,
		"fallback": "iconoven:stained-glass",
	});
}

export default Component;
