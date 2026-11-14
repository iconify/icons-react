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
		"content": `<style>.uk8ueabnd {
  d: path("M16.5 13.4v7.1h-14v-13h8.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqpkksb5v {
  d: path("M5.5 17.5c1.5-2 3 0 4.5-2m6.5-10l2 2L15 11c-1 1-3 1.5-3.5 1.5c0-.5.5-2.5 1.5-3.5Zm1 1l4-4");
}
</style><g class="ulnmmdpxh"><path class="uk8ueabnd"/><path class="xqpkksb5v"/></g>`,
		"fallback": "uix-sharp:mask-brush",
	});
}

export default Component;
