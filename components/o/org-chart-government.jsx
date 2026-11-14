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
		"content": `<style>.ci7ptt33j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3h6v5H9ZM3 15h6v5H3Zm12 0h6v5h-6Zm-3-7v3.5M6 15v-3.5h12V15");
}
</style><path class="ci7ptt33j"/>`,
		"fallback": "uix-sharp:org-chart-government",
	});
}

export default Component;
