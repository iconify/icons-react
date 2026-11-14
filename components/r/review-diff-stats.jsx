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
		"content": `<style>.avwn_5ruv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 4.5v7M2.75 8h7m-7 9h7m3.5-11.25h8v4.5h-8Zm0 9h4.5v4.5h-4.5Z");
}
</style><path class="avwn_5ruv"/>`,
		"fallback": "uix-sharp:review-diff-stats",
	});
}

export default Component;
