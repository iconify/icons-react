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
		"content": `<style>.p0-edfbqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3v9.75m0 4.5V21m6-18v2.75m0 4.5V21m6-18v7.75m0 4.5V21M3.75 15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm6-7a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm6 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><path class="p0-edfbqx"/>`,
		"fallback": "uix-sharp:settings-sliders",
	});
}

export default Component;
