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
		"content": `<style>.bj5givihx {
  d: path("m12.795 5.997l.205.128a1.5 1.5 0 0 1 .627 1.744l-.035.105A1.5 1.5 0 0 1 12.169 9h-.338a1.5 1.5 0 0 1-1.423-1.026l-.035-.105A1.5 1.5 0 0 1 11 6.125l.205-.128a1.5 1.5 0 0 1 1.59 0M12 5.5v-3m2 4.25l2.75-1M13.25 9l1.5 2.75m-4-2.75l-1.5 2.75m.75-5l-2.75-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m8sredb8y {
  d: path("M7 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0M3.5 21v-5.5h5c1 1.5 2.5 2 4.5 2h4.5c2 0 3 1.25 3 2.5v1Z");
}
</style><g class="hntgybcog"><path class="m8sredb8y"/><path class="bj5givihx"/></g>`,
		"fallback": "uix:juggle-ball",
	});
}

export default Component;
