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
		"content": `<style>.q7ywadcny {
  d: path("m12 2.5l9.5 18h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wc1pm8b5h {
  d: path("M10.5 18v-7.5c2.5 1.75 3.25 4 3.25 7.5Z");
}
</style><g class="ulnmmdpxh"><path class="q7ywadcny"/><path class="wc1pm8b5h"/></g>`,
		"fallback": "uix-sharp:warning-sharp-blade",
	});
}

export default Component;
