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
		"content": `<style>.t7atmibti {
  d: path("M12 21.5V8c-.25-3-2.25-5-5.25-5C6.75 6 9 8 12 8c.25-3.25 2.25-5.5 5.25-5.5c0 3-2 5.5-5.25 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjsmkacbs {
  d: path("M4.5 11.5h15V15h-15ZM6 15h12v6.5H6Z");
}
</style><g class="ulnmmdpxh"><path class="vjsmkacbs"/><path class="t7atmibti"/></g>`,
		"fallback": "uix-sharp:plant-gift",
	});
}

export default Component;
