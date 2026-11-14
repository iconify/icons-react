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
		"content": `<style>.on6s2nb5g {
  d: path("M5.5 2.5h13v19h-13Zm3.5 4h6");
}

.t-5h5fbau {
  d: path("M9 9.5h6V14H9Zm1 8h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="on6s2nb5g"/><path class="t-5h5fbau"/></g>`,
		"fallback": "uix-sharp:landing-page-mobile",
	});
}

export default Component;
