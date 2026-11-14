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
		"content": `<style>.gmim_3b_e {
  fill: currentColor;
  d: path("M14.5 16h5v4.5h-5Z");
}

.sxvzxibbq {
  d: path("M4.5 20.5V10a7.5 7.5 0 0 1 15 0v10.5h-5V10a2.5 2.5 0 0 0-5 0v10.5Zm0-4.5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sxvzxibbq"/><path class="gmim_3b_e"/></g>`,
		"fallback": "uix-sharp:magnetic-poles",
	});
}

export default Component;
