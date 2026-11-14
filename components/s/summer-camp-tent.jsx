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
		"content": `<style>.hcadwabkv {
  d: path("M2.5 20.5L12 5l9.5 15.5Zm8-17L12 5l1.5-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vs5j3vbrx {
  d: path("M8.5 20.5L12 12l3.5 8.5");
}
</style><g class="ulnmmdpxh"><path class="hcadwabkv"/><path class="vs5j3vbrx"/></g>`,
		"fallback": "uix-sharp:summer-camp-tent",
	});
}

export default Component;
