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
		"content": `<style>.s2wqumpyc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17a9 4 0 1 0 18 0a9 4 0 1 0-18 0Zm5.5-1.25v2.5m3.5-2.5v2.5m3.5-2.5v2.5M3 3.5q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0m-18 5q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="s2wqumpyc"/>`,
		"fallback": "uix-sharp:overflowing-drain",
	});
}

export default Component;
