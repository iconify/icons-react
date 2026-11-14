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
		"content": `<style>.p591j7b0w {
  d: path("M5 10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.5 1.5V16m7-6h5m-5 4h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zrbxehbqc {
  d: path("M2.5 5h19v14h-19Zm8 0v14");
}
</style><g class="ulnmmdpxh"><path class="zrbxehbqc"/><path class="p591j7b0w"/></g>`,
		"fallback": "uix-sharp:key-value-store",
	});
}

export default Component;
