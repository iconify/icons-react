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
		"content": `<style>.czu33icqx {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jeo315hjw {
  d: path("M9.5 17L8 21.5h8L14.5 17m-4-7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m.25-1l-2-.25l-2-4M13.25 9l2-.25l2-4");
}
</style><g class="hntgybcog"><path class="czu33icqx"/><path class="jeo315hjw"/></g>`,
		"fallback": "uix:plasma-ball",
	});
}

export default Component;
