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
		"content": `<style>.ejsxmgbjw {
  d: path("M10 5.25c-1.75 0-3 1.25-3 3.1c0 1.75.6 2.9 1 4.4V19a1.25 1.25 0 0 0 2.5 0v-2.75a1.25 1.25 0 0 1 2.5 0V19a1.25 1.25 0 0 0 2.5 0v-6.25c.4-1.5 1-2.65 1-4.4c0-1.85-1.25-3.1-3-3.1c-1.2 0-1.65.6-2 .6s-.8-.6-2-.6ZM19 3q.24 1.76 2 2q-1.76.24-2 2q-.24-1.76-2-2q1.76-.24 2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.klsjt6ink {
  d: path("M7 9.75c-2-2.5-4.25-2-4.25.25S5 13.25 7.6 12.25m9.4-2.5c2-2.5 4.25-2 4.25.25S19 13.25 16.4 12.25");
}
</style><g class="hntgybcog"><path class="klsjt6ink"/><path class="ejsxmgbjw"/></g>`,
		"fallback": "iconoven:tooth-fairy",
	});
}

export default Component;
