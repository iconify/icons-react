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
		"content": `<style>.g_e973bkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h12V14h-12Zm16.169 8.501L14.5 10.5V8l5-3v6.969M14.25 18H19m-2-2l2 2l-2 2m4.5-5.25v6.5");
}
</style><path class="g_e973bkn"/>`,
		"fallback": "uix-sharp:join-visit",
	});
}

export default Component;
