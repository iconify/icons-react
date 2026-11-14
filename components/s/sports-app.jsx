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
		"content": `<style>.tbsn4tbjy {
  d: path("M5.5 2.5h13v19h-13Zm5.25 2.75h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yxobs0p_g {
  d: path("M8.25 13a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM12 9.25v7.5M8.25 13h7.5");
}
</style><g class="ulnmmdpxh"><path class="tbsn4tbjy"/><path class="yxobs0p_g"/></g>`,
		"fallback": "uix-sharp:sports-app",
	});
}

export default Component;
