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
		"content": `<style>.f2ri0x7vn {
  d: path("M8.5 14a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5 0l1.5-2M8 5h8");
}

.kpzz8pblx {
  d: path("M3.5 8h17v12h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kpzz8pblx"/><path class="f2ri0x7vn"/></g>`,
		"fallback": "uix-sharp:kitchen-scale",
	});
}

export default Component;
