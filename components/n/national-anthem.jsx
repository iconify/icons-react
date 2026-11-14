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
		"content": `<style>.cc7fytbrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5v19m0-18q3.75-2 7.5 0t7.5 0V11q-.761.406-1.523.647m-2.995.311Q13.491 11.795 12 11q-3.75-2-7.5 0m9.75 8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3.5 0v-5m0 0l2.75 1");
}
</style><path class="cc7fytbrz"/>`,
		"fallback": "uix-sharp:national-anthem",
	});
}

export default Component;
