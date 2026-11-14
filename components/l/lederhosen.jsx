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
		"content": `<style>.pw1ahrbwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 11.5h12l1.25 9H13.5l-1.5-5l-1.5 5H4.75Zm2.5 0v-8m7 8v-8M8.5 7h7");
}
</style><path class="pw1ahrbwb"/>`,
		"fallback": "uix-sharp:lederhosen",
	});
}

export default Component;
