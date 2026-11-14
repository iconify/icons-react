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
		"content": `<style>.zk98njqie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.241 15h13.518a1.75 1.75 0 0 1 1.697 2.174l-.625 2.5A1.75 1.75 0 0 1 18.134 21H5.866a1.75 1.75 0 0 1-1.697-1.326l-.625-2.5A1.75 1.75 0 0 1 5.241 15M12 15V8m0 2.5C12 8 14 7 16.5 7c0 2.5-2 3.5-4.5 3.5m0 1.75c0-2.5-2-3.5-4.5-3.5c0 2.5 2 3.5 4.5 3.5M5.5 2.5l-1 3M12.25 2l-.75 2.75M20 3l-.75 2.75");
}
</style><path class="zk98njqie"/>`,
		"fallback": "uix:rain-garden",
	});
}

export default Component;
