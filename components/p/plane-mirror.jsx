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
		"content": `<style>.pu5-w9wip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13v16h-13Zm3.5 7L12.5 6M9 13.5L15.5 7M12 18.5v3m-3.5 0h7");
}
</style><path class="pu5-w9wip"/>`,
		"fallback": "uix-sharp:plane-mirror",
	});
}

export default Component;
