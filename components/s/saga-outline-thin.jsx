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
		"content": `<style>.gnw6lwwpf {
  d: path("M3 8.25A2.25 2.25 0 0 1 5.25 6h2.5A2.25 2.25 0 0 1 10 8.25a2.25 2.25 0 0 1 -2.25 2.25h-2.5A2.25 2.25 0 0 1 3 8.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ltkkdtbvf {
  d: path("M8.5 14.5 6 17l2.5 2.5");
}

.rcqlbvbaf {
  d: path("M14 8.25A2.25 2.25 0 0 1 16.25 6h2.5A2.25 2.25 0 0 1 21 8.25a2.25 2.25 0 0 1 -2.25 2.25h-2.5A2.25 2.25 0 0 1 14 8.25");
}

.taxmbub4q {
  d: path("M6 17h12");
}
</style><g class="hntgybcog"><path class="gnw6lwwpf"/><path class="rcqlbvbaf"/><path class="taxmbub4q"/><path class="ltkkdtbvf"/></g>`,
		"fallback": "iconmind:saga-outline-thin",
	});
}

export default Component;
