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
		"content": `<style>.dbxzrebtc {
  d: path("M2.5 16c2.385 0 3.404-2.275 5.663-2.485m2.605 1.477c1.153 1.474 2.137 3.508 3.732 3.508c2.5 0 3.5-3 7-3");
}

.jnm3f4g0f {
  fill: currentColor;
  d: path("m12.75 2.5l-3 6.5h2.5l-1.5 5.5L15.5 7H13l1.75-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dbxzrebtc"/><path class="jnm3f4g0f"/></g>`,
		"fallback": "uix-sharp:nerve-pain",
	});
}

export default Component;
