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
		"content": `<style>.hvbl6frvp {
  d: path("M9 12h6v4.5H9Zm1.5 0v-1.5a1.5 1.5 0 0 1 3 0V12");
}

.o-1wg495k {
  d: path("M4.5 2.5h15v19h-15Zm7.5 0v3.7m0 13.1v2.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o-1wg495k"/><path class="hvbl6frvp"/></g>`,
		"fallback": "uix-sharp:locked-cabinet",
	});
}

export default Component;
