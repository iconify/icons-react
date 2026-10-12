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
		"content": `<style>.hb69bcbpg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12.25V7H6.75q-2.25 0-3 3l-.5 4.75C3 17 4.5 18.5 6.25 18.5H9v-2.75h6v2.75h2.75c1.75 0 3.25-1.5 3-3.75l-.5-4.75q-.75-3-3-3H15v5.25Zm3-9.5v9.5m0 3.5v5.5");
}
</style><path class="hb69bcbpg"/>`,
		"fallback": "iconoven:thyroid-sharp",
	});
}

export default Component;
