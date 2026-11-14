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
		"content": `<style>.jmlr1crkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10a7 7 0 0 1 14 0M3 10h4v6.5H3Zm14 0h4v6.5h-4ZM5 16.5v1a3 3 0 0 0 3 3h2m0-1.25h3.5v2.5H10Z");
}
</style><path class="jmlr1crkj"/>`,
		"fallback": "uix-sharp:stage-manager",
	});
}

export default Component;
