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
		"content": `<style>.dplf0kbvv {
  d: path("M8.5 13.5H15");
}

.dx3ubrb9h {
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hbtmd5b0k {
  d: path("M9.5 7V2.5h5V7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vzd-eybko {
  d: path("m11 11 -2.5 2.5L11 16");
}
</style><g class="s0phu2bbs"><path class="dx3ubrb9h"/><path class="hbtmd5b0k"/><path class="dplf0kbvv"/><path class="vzd-eybko"/></g>`,
		"fallback": "iconmind:return-policy-outline-bold",
	});
}

export default Component;
