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
		"content": `<style>.jw_3cj0ru {
  d: path("m3.5 12.5l4-8.5l4 8.5M5 9.5h5m3.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm6-3v6M14 4h3a2.5 2.5 0 0 1 2.5 2.5v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0h8v-qvv {
  d: path("m18 8l1.5 1.5L21 8");
}
</style><g class="ulnmmdpxh"><path class="jw_3cj0ru"/><path class="z0h8v-qvv"/></g>`,
		"fallback": "uix-sharp:text-translate",
	});
}

export default Component;
