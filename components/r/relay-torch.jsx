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
		"content": `<style>.xpbsf-vro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 10.25c-.75-1.5-.75-3.25 0-5c.5 1 1.1 1.6 1.75 1.75c.25-2 1.25-3.25 2.75-4.25c.25 2 1.5 3 2.25 4.25c.6 1 .75 2.1.25 3.25Zm0 0h7q1 0 .38.79l-1.51 1.92q-.62.79-.65 1.79l-.19 5.5q-.03 1-1.03 1h-1q-1 0-1.03-1l-.19-5.5q-.03-1-.65-1.79l-1.51-1.92q-.62-.79.38-.79");
}
</style><path class="xpbsf-vro"/>`,
		"fallback": "iconoven:relay-torch",
	});
}

export default Component;
