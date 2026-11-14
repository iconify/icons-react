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
		"content": `<style>.d-hdbzw0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 15V2.5h6v10.6m0 5.9v2.5H9v-.6M9 5h3M9 9h3m-3 4h3M2 17q2.5-2 5 0t5 0t5 0t5 0");
}
</style><path class="d-hdbzw0u"/>`,
		"fallback": "uix-sharp:river-gauge-board",
	});
}

export default Component;
