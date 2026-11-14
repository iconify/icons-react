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
		"content": `<style>.vel5bqb9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l8.227 4.75v9.5L12 21.5l-8.227-4.75v-9.5ZM9 9l6 6m0-6l-6 6");
}
</style><path class="vel5bqb9d"/>`,
		"fallback": "uix-sharp:task-failed",
	});
}

export default Component;
