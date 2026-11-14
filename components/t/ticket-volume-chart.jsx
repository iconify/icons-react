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
		"content": `<style>.s78keygyu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h9.9m-8.9 0v-4m3 4v-8m3 8V8m3 4.2V3.5M15.25 15h6.25v1.75a1 1 0 0 0 0 2v1.75h-6.25v-1.75a1 1 0 0 0 0-2Z");
}
</style><path class="s78keygyu"/>`,
		"fallback": "uix-sharp:ticket-volume-chart",
	});
}

export default Component;
