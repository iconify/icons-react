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

.m8a-zmb2h {
  d: path("M11.75 10h.5a1.5 1.5 0 0 1 1.5 1.5V14a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-2.5a1.5 1.5 0 0 1 1.5-1.5m-1 8.25h2.5");
}

.pqbhgybrq {
  fill: currentColor;
  d: path("M19 15.5c1.25 1.5 2 2.5 2 3.5c0 1.25-.9 2-2 2s-2-.75-2-2c0-1 .75-2 2-3.5");
}

.ro56kbg8r {
  d: path("M12 2.5zA3.5 3.5 0 0 1 15.5 6v12a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 18V6A3.5 3.5 0 0 1 12 2.5m-3.5 5h7");
}
</style><g class="hntgybcog"><path class="ro56kbg8r"/><path class="m8a-zmb2h"/><path class="pqbhgybrq"/></g>`,
		"fallback": "uix:pregnancy-test",
	});
}

export default Component;
