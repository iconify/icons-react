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
		"content": `<style>.gnzu-uy3z {
  d: path("M4 3h16v18.5H4Z");
}

.uff-arbua {
  d: path("M7 12.5h10v6H7Zm.5-5h.01m2.99 0h.01m2.99 0h.01m2.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gnzu-uy3z"/><path class="uff-arbua"/></g>`,
		"fallback": "uix-sharp:range-cooker",
	});
}

export default Component;
