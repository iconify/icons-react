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
		"content": `<style>.f18_f1p2j {
  d: path("M5.5 2.5h13v19h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xwivk2bwj {
  d: path("M8.5 18.5h7L13 5.5h-2Zm3.5-3l3.5-7");
}
</style><g class="ulnmmdpxh"><path class="f18_f1p2j"/><path class="xwivk2bwj"/></g>`,
		"fallback": "uix-sharp:metronome-app",
	});
}

export default Component;
