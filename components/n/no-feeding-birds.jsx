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
		"content": `<style>.i_512k74e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.982 9.988q-1.203.192-2.482.512L8 13c.479 3.829 3.248 5.826 6.554 5.55m4.651-3.294c.292-.882.38-1.901.295-3.006l2-1.25l-2.25-1.25c-.5-2.5-2.25-4-4.25-4c-1.472 0-2.73.642-3.494 1.786M15.75 9h.01M3.5 3.5l17 17");
}
</style><path class="i_512k74e"/>`,
		"fallback": "uix:no-feeding-birds",
	});
}

export default Component;
