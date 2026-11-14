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
		"content": `<style>.j-e1gk-hd {
  d: path("M11.677 19.115L9 18l-6 2.5V6l6-2.5L15 6l6-2.5v9.6M9 3.5V18m6-12v5.7");
}

.sb1gxdskl {
  d: path("M14.5 14.5h4L22 18l-3.5 3.5h-4ZM17 18h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j-e1gk-hd"/><path class="sb1gxdskl"/></g>`,
		"fallback": "uix-sharp:map-tag",
	});
}

export default Component;
