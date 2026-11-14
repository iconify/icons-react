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
		"content": `<style>.oe5y2u6sa {
  d: path("M13.7 21.5H3.5v-17h17v8.9M8 2.5v4m8-4v4M3.5 9h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vssxu60si {
  d: path("M14.25 18c2-3 5.5-3 7.5 0c-2 3-5.5 3-7.5 0ZM18 18h.01");
}
</style><g class="ulnmmdpxh"><path class="oe5y2u6sa"/><path class="vssxu60si"/></g>`,
		"fallback": "uix-sharp:viewing-appointment",
	});
}

export default Component;
