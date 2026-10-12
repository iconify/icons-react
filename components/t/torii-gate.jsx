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
		"content": `<style>.miuyzgb4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.25h17q.75 0 .51.71l-.52 1.58q-.24.71-.99.71h-15q-.75 0-.99-.71l-.52-1.58q-.24-.71.51-.71m2.75 3h1.5q.5 0 .5.5V9.5q0 .5.5.5h6.5q.5 0 .5-.5V6.75q0-.5.5-.5h1.5q.5 0 .5.5V9.5q0 .5.5.5h1.5q.5 0 .5.5V12q0 .5-.5.5h-1.5q-.5 0-.5.5v7.75q0 .5-.5.5h-1.5q-.5 0-.5-.5V13q0-.5-.5-.5h-6.5q-.5 0-.5.5v7.75q0 .5-.5.5h-1.5q-.5 0-.5-.5V13q0-.5-.5-.5h-1.5q-.5 0-.5-.5v-1.5q0-.5.5-.5h1.5q.5 0 .5-.5V6.75q0-.5.5-.5");
}
</style><path class="miuyzgb4b"/>`,
		"fallback": "iconoven:torii-gate",
	});
}

export default Component;
