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
		"content": `<style>.dy2nczbfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h9v3a4.5 4.5 0 0 1-9 0Zm2.5 0V7m4 4V7m-2 11.5v3m5.368-15.424a5 5 0 0 1 4.056 4.056m-3.361-7.995a9 9 0 0 1 7.3 7.3");
}
</style><path class="dy2nczbfk"/>`,
		"fallback": "uix:smart-plug",
	});
}

export default Component;
