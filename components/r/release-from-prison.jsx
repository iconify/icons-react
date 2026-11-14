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
		"content": `<style>.j6gcd3-qk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 3.5h-10a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10m-8.25-17v17M10 3.5v17m2.75-8.5h8.75m-3-3l3 3l-3 3");
}
</style><path class="j6gcd3-qk"/>`,
		"fallback": "uix-sharp:release-from-prison",
	});
}

export default Component;
