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
		"content": `<style>.qwcnj2x4y {
  d: path("m4.929 14.121l4.95 4.95l-2.122 2.121l-4.949-4.949Zm8.132-6.717l4.949 2.121m-8.131 1.061l4.949 2.121");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yb_nwrb4w {
  d: path("m16.95 3.515l3.535 3.535L9.172 18.364l-3.536-3.536Z");
}
</style><g class="ulnmmdpxh"><path class="yb_nwrb4w"/><path class="qwcnj2x4y"/></g>`,
		"fallback": "uix-sharp:tennis-grip-tape",
	});
}

export default Component;
