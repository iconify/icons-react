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
		"content": `<style>.hdqgxt26r {
  d: path("M2.75 21.25V10C6.5 11 9 14.5 10 21.25Zm18.5 0V12.5c-3.25.75-5.75 3.75-6.75 8.75Zm-9-8.5c-.75 1.5.75 2.75 0 4.25s.5 2.75 0 4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ua9o6gydm {
  cx: 16.5px;
  cy: 6px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="hdqgxt26r"/><circle class="ua9o6gydm"/></g>`,
		"fallback": "iconoven:valley",
	});
}

export default Component;
