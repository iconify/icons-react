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
		"content": `<style>.o-dd2qbrp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.1 21.5H2.5V12h12.7m5.6 0h.7v3.1m-19-.1h12.1m-7.1-3l1.25-4.75m2.224-3.696a2.25 2.25 0 1 1-3.448 0M13.5 2.5h4V9h-4Zm2 6.5v2.7m2.5 2.8v7m-3-3l3 3l3-3");
}
</style><path class="o-dd2qbrp"/>`,
		"fallback": "uix-sharp:repair-drop-off",
	});
}

export default Component;
