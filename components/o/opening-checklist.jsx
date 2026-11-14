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
		"content": `<style>.dpkf0tb-j {
  d: path("M8.5 2.5h7v4h-7Zm-.75 7.75L9 11.5l2.25-2.25m2.25 1h3M7.75 15h3.5m3.25 2.5h7V22h-7Zm1.75 0v-1.25a1.75 1.75 0 0 1 3.5-.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-djotssm {
  d: path("M11.7 21.5H4.5v-17h15v7.2");
}
</style><g class="ulnmmdpxh"><path class="z-djotssm"/><path class="dpkf0tb-j"/></g>`,
		"fallback": "uix-sharp:opening-checklist",
	});
}

export default Component;
