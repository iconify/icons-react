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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0jzrhf-f {
  d: path("M12.7 17.5H2.5v-14H20v8.1");
}

.yxb-yihdi {
  d: path("m6 14.5l4-4.5l4.5 4.5M14 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3.5 7.5L20 18l-2.5 2.5c-1 1-3 1-3 1s0-2 1-3Zm1.25 1.25l3-3");
}
</style><g class="ulnmmdpxh"><path class="v0jzrhf-f"/><path class="yxb-yihdi"/></g>`,
		"fallback": "uix-sharp:matte-painting",
	});
}

export default Component;
