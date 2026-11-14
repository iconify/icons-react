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
		"content": `<style>.papmo0bwj {
  d: path("M8.25 14.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm3.75 0l2.25-3");
}

.s42uwgodv {
  d: path("M3 7.5h18v14H3Zm.5-4h17m-8.5 0v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s42uwgodv"/><path class="papmo0bwj"/></g>`,
		"fallback": "uix-sharp:measure-mass",
	});
}

export default Component;
