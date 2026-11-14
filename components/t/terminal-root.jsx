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
		"content": `<style>.bcl4mtb-k {
  d: path("m6.5 7l3 3l-3 3m10 1v8m3-8v8M14 16.75h8m-8 2.75h8");
}

.no8kblw0g {
  d: path("M11.2 17.5H2.5v-15h17v8.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="no8kblw0g"/><path class="bcl4mtb-k"/></g>`,
		"fallback": "uix-sharp:terminal-root",
	});
}

export default Component;
