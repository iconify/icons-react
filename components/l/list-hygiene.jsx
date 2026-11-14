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
		"content": `<style>.n7khk349y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M3 9.5h18M3 15h8.5m6.25-1q.5 3.25 3.75 3.75q-3.25.5-3.75 3.75q-.5-3.25-3.75-3.75q3.25-.5 3.75-3.75");
}
</style><path class="n7khk349y"/>`,
		"fallback": "uix:list-hygiene",
	});
}

export default Component;
