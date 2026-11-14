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
		"content": `<style>.s03ig2bgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2.5v19m0-16h4.5m-4.5 4h4.5m-4.5 4h4.5M3 18.5q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="s03ig2bgk"/>`,
		"fallback": "uix-sharp:pool-depth-marker",
	});
}

export default Component;
