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
		"content": `<style>.wt8x4vclm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h17v10h-17Zm1.25 0C3 5 7 4 8.5 5.5C10 4 14 5 12.25 11m3.25 0c-.5-4.5 2-7 5.5-7.5c0 4-2.5 6.5-5.5 7.5Zm-12 5h17M8.5 5.5l.75-2");
}
</style><path class="wt8x4vclm"/>`,
		"fallback": "uix-sharp:local-produce-crate",
	});
}

export default Component;
