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
		"content": `<style>.knuashbqo {
  d: path("M8.5 11.5L11 14l4.5-4.5");
}

.trtgpubah {
  d: path("M7.75 18.75a8.5 8.5 0 1 0-3-3L3 20.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="trtgpubah"/><path class="knuashbqo"/></g>`,
		"fallback": "uix-sharp:review-resolve",
	});
}

export default Component;
