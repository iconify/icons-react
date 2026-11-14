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
		"content": `<style>.o5xxsmb3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.6 18.5H2.5v-16h18v9.2m-18-4.2h18m-9 0v10.6m6.5-3.6V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="o5xxsmb3t"/>`,
		"fallback": "uix-sharp:tax-withholding-table",
	});
}

export default Component;
