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
		"content": `<style>.dlvvo8ntx {
  d: path("M14.4 21.5H3v-19h16.5v10.4M3 12h16.5M7 5.5V12m3-6.5V12m3 0l2.5-6.25");
}

.g-56du9fb {
  d: path("M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dlvvo8ntx"/><path class="g-56du9fb"/></g>`,
		"fallback": "uix-sharp:library-shelf-search",
	});
}

export default Component;
