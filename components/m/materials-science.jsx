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
		"content": `<style>.e_0magb5l {
  d: path("M6.75 8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm0 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ead74071j {
  d: path("M2.5 2.5h19v19h-19Zm7.75 6h3.5m1.75 1.75v3.5m-1.75 1.75h-3.5M8.5 13.75v-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ead74071j"/><path class="e_0magb5l"/></g>`,
		"fallback": "uix-sharp:materials-science",
	});
}

export default Component;
