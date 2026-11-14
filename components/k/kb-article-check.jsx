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
		"content": `<style>.n5cg660mb {
  d: path("M14.3 21.5H4.5v-19h15v10.8m0 7.9v.3h-.3");
}

.ozkwu1o3k {
  d: path("M8 6h8v3.5H8Zm0 6.5h8m-8 4h4m2.75 1.5l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n5cg660mb"/><path class="ozkwu1o3k"/></g>`,
		"fallback": "uix-sharp:kb-article-check",
	});
}

export default Component;
