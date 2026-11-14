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
		"content": `<style>.xifcjq0zx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m16-19v19M4 3l6 2.5L4 8Zm16 0l-6 2.5L20 8ZM7 17.5l7.5-6m-5 8.5l7.5-6");
}
</style><path class="xifcjq0zx"/>`,
		"fallback": "uix-sharp:skier-slalom",
	});
}

export default Component;
