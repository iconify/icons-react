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
		"content": `<style>.q5pb_sjlz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v3.5h-19Zm6 3.5v11a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-11m-11 0V14a2 2 0 0 0 2 2h2m7 0h2a2 2 0 0 0 2-2V7.5");
}
</style><path class="q5pb_sjlz"/>`,
		"fallback": "uix-sharp:kendo-tare",
	});
}

export default Component;
