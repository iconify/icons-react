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
		"content": `<style>.fhfesmhux {
  d: path("M6.4 2.5H18v11.6m-.9 6.9H3V6.9");
}

.nzwidpv5u {
  d: path("M9.4 5.5h4.1v4.1M11.1 15H7.5v-3.6m-4-7.9l17 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fhfesmhux"/><path class="nzwidpv5u"/></g>`,
		"fallback": "uix-sharp:smart-switch-off",
	});
}

export default Component;
