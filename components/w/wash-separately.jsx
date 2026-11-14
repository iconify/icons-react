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
		"content": `<style>.nik2pib3v {
  d: path("M2.5 12h19l-2 9h-15ZM8 12V8.25L5.5 9L4 6l4.5-2.75H10a2 2 0 0 0 4 0h1.5L20 6l-1.5 3l-2.5-.75V12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbu6z9guh {
  d: path("M7.25 16.5q1.25-1.25 2.5 0t2.5 0t2.5 0t2.5 0");
}
</style><g class="ulnmmdpxh"><path class="nik2pib3v"/><path class="vbu6z9guh"/></g>`,
		"fallback": "uix-sharp:wash-separately",
	});
}

export default Component;
