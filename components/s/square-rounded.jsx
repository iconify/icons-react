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
		"content": `<style>.mg6sjgsph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3h8m5 5v8m-5 5H8m-5-5V8m13-5a5 5 0 0 1 5 5m0 8a5 5 0 0 1-5 5m-8 0a5 5 0 0 1-5-5m0-8a5 5 0 0 1 5-5");
}
</style><path class="mg6sjgsph"/>`,
		"fallback": "uix-sharp:square-rounded",
	});
}

export default Component;
