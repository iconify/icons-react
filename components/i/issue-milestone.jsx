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
		"content": `<style>.bf1l376ju {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M9 6v12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.suw3y8bbg {
  d: path("M9 6h7l-2.25 2.75L16 11.5H9");
}
</style><g class="hntgybcog"><path class="bf1l376ju"/><path class="suw3y8bbg"/></g>`,
		"fallback": "uix:issue-milestone",
	});
}

export default Component;
