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
		"content": `<style>.ulvtjqqdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M9 13v6m0 0a5.75 1.75 0 1 0 11.5 0A5.75 1.75 0 1 0 9 19m-5.5 0H9");
}
</style><path class="ulvtjqqdt"/>`,
		"fallback": "uix:tree-shade",
	});
}

export default Component;
