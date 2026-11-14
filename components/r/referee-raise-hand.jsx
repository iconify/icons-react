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
		"content": `<style>.a70-aijld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4.5v7a4.5 4.5 0 0 0 9 0v-6m-6-3V9m3-6v6m-6 1.5l-3-3m5 7.75v6.25m5-6.25v6.25");
}
</style><path class="a70-aijld"/>`,
		"fallback": "uix-sharp:referee-raise-hand",
	});
}

export default Component;
