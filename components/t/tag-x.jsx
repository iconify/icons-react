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
		"content": `<style>.bbxgnsi0a {
  d: path("M6.25 7.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm9.25 7.75l5 5m0-5l-5 5");
}

.ezw0ce32s {
  d: path("M11.762 20.262L3 11.5V3h8.5l8.768 8.768");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ezw0ce32s"/><path class="bbxgnsi0a"/></g>`,
		"fallback": "uix-sharp:tag-x",
	});
}

export default Component;
