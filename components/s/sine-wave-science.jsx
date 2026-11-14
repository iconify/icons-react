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
		"content": `<style>.anuop85oo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12c2.5-8.5 7-8.5 9.5 0s7 8.5 9.5 0m-19 0h19");
}
</style><path class="anuop85oo"/>`,
		"fallback": "uix-sharp:sine-wave-science",
	});
}

export default Component;
