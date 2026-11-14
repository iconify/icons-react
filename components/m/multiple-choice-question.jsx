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
		"content": `<style>.oda4a2bll {
  d: path("M3 3.5h18v17H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w3g37qb0s {
  d: path("M6.25 9a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm0 6a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5.25-6H17m-5.5 6H17");
}
</style><g class="ulnmmdpxh"><path class="oda4a2bll"/><path class="w3g37qb0s"/></g>`,
		"fallback": "uix-sharp:multiple-choice-question",
	});
}

export default Component;
