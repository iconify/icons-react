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
		"content": `<style>.g69nks16v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.25a9 9 0 0 1 7.75-8.91v8.91Zm10.25-8.91A9 9 0 0 1 21 21.25h-7.75ZM12 2.75q.39 2.86 3.25 3.25q-2.86.39-3.25 3.25Q11.61 6.39 8.75 6q2.86-.39 3.25-3.25Z");
}
</style><path class="g69nks16v"/>`,
		"fallback": "iconoven:observatory-dome-sharp",
	});
}

export default Component;
