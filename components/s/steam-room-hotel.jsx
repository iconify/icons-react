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
		"content": `<style>.g7jcxcbtp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5h19V18h-19Zm3 3.5v3m13-3v3M7 11.5C5.5 10 8.5 8 7 6.5s1.5-3 0-4m5 9c-1.5-1.5 1.5-3.5 0-5s1.5-3 0-4m5 9c-1.5-1.5 1.5-3.5 0-5s1.5-3 0-4");
}
</style><path class="g7jcxcbtp"/>`,
		"fallback": "uix-sharp:steam-room-hotel",
	});
}

export default Component;
