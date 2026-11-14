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
		"content": `<style>.lnu4z1wxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5V3h9v4.5M13.1 19H2.5V7.5h17v5.1m-13-.1h6m3 3l5 5m0-5l-5 5");
}
</style><path class="lnu4z1wxg"/>`,
		"fallback": "uix-sharp:printing-press-x",
	});
}

export default Component;
