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
		"content": `<style>.eq16i8bhc {
  d: path("M14.631 21H3V10.5L12 3l9 7.5v4.069");
}

.kyhy64biz {
  d: path("M7 21v-3.5a2 2 0 0 1 4 0V21m5.25-3a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM18 14.25V15m0 6v.75M14.25 18H15m6 0h.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eq16i8bhc"/><path class="kyhy64biz"/></g>`,
		"fallback": "uix-sharp:vacation-home",
	});
}

export default Component;
