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
		"content": `<style>.f1a4s5htp {
  d: path("M16.781 3.568a4.5 4.5 0 1 1-5.213 3.651");
}

.qn6st_bgv {
  d: path("m11.828 9.697l2.475 2.475l-8.131 8.131l-2.475-2.475Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f1a4s5htp"/><path class="qn6st_bgv"/></g>`,
		"fallback": "uix-sharp:maintenance",
	});
}

export default Component;
