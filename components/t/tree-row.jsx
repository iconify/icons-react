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
		"content": `<style>.x1mxmob6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.779 15.762l.846-5.262a1.139 1.139 0 0 1 2.25 0l.846 5.262A1.5 1.5 0 0 1 5.24 17.5h-.98a1.5 1.5 0 0 1-1.481-1.738m7.25 0l.846-5.262a1.139 1.139 0 0 1 2.25 0l.846 5.262A1.5 1.5 0 0 1 12.49 17.5h-.98a1.5 1.5 0 0 1-1.481-1.738m7.25 0l.846-5.262a1.139 1.139 0 0 1 2.25 0l.846 5.262A1.5 1.5 0 0 1 19.74 17.5h-.98a1.5 1.5 0 0 1-1.481-1.738M2.5 21h19");
}
</style><path class="x1mxmob6q"/>`,
		"fallback": "uix:tree-row",
	});
}

export default Component;
