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
		"content": `<style>.f1eax8b9a {
  d: path("M12.2 20.5H3.5v-18H18v9.7");
}

.q899avbgr {
  d: path("M6.25 5.25h3v3h-3Zm6 0h3v3h-3Zm-6 6h3v3h-3Zm8.1 3h-2.1v-3h3v2M15 17.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f1eax8b9a"/><path class="q899avbgr"/></g>`,
		"fallback": "uix-sharp:smart-lock-keypad",
	});
}

export default Component;
