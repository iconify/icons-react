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
		"content": `<style>.pvmsuzhos {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5v19M14.8 13H2.5v-2.5h19V13h-.3M2.5 18l5-5m-1-2.5V6l1-1V3H9v2l1 1v4.5m2.5-6h6v6h-6Zm2 13h7V22h-7Zm1.75 0v-1.25a1.75 1.75 0 0 1 3.5 0v1.25");
}
</style><path class="pvmsuzhos"/>`,
		"fallback": "uix-sharp:shelf-lock",
	});
}

export default Component;
