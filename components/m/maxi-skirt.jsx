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
		"content": `<style>.wupdhf05t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5h8v3H8Zm1 3l-4.5 15q7.5 1.5 15 0L15 5.5m-4.75 5L9.5 18m4.25-7.5l.75 7.5");
}
</style><path class="wupdhf05t"/>`,
		"fallback": "uix-sharp:maxi-skirt",
	});
}

export default Component;
