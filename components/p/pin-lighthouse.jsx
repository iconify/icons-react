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
		"content": `<style>.wlr2q6-fo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 6l3-3.5L15 6Zm1 0v4.5M14 6v4.5m-6.5 0h9m-6.5 0l-2 11m6-11l2 11m-11.5 0h15M9 16h6M6.25 6.5L2.5 5m15.25 1.5L21.5 5");
}
</style><path class="wlr2q6-fo"/>`,
		"fallback": "uix-sharp:pin-lighthouse",
	});
}

export default Component;
