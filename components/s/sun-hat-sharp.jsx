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
		"content": `<style>.r5rbq9zuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 11V9a4 4 0 0 1 8 0v2Zm.25-2.25h7.5M2.75 17c0-2 4.25-3.5 9.25-3.5s9.25 1.5 9.25 3.5v1.173l-1.15-.523c-2.35-1.05-5.1-1.4-8.1-1.4s-5.75.35-8.1 1.4l-1.15.523z");
}
</style><path class="r5rbq9zuc"/>`,
		"fallback": "iconoven:sun-hat-sharp",
	});
}

export default Component;
