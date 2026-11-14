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
		"content": `<style>.eqcfii6rk {
  d: path("M5.5 10.75a5 6.25 0 1 0 10 0a5 6.25 0 1 0-10 0Z");
}

.k4iawsbjq {
  d: path("M6.25 8L3.5 6V3.5M14.75 8l2.75-2V3.5M6.5 14l-3 2l1 3M8.75 7.5h.01m3.49 0h.01M15.5 21l5.5-5.5m-3 0h3v3m-6 1l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eqcfii6rk"/><path class="k4iawsbjq"/></g>`,
		"fallback": "uix-sharp:poison-dart-frog",
	});
}

export default Component;
