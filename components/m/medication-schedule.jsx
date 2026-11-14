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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.spun-osfj {
  d: path("m3.575 13.475l9.9-9.9a1.5 1.5 0 0 1 2.121 0l2.829 2.829a1.5 1.5 0 0 1 0 2.121l-9.9 9.9a1.5 1.5 0 0 1-2.121 0l-2.829-2.829a1.5 1.5 0 0 1 0-2.121Zm4.95-4.95l4.95 4.95M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="spun-osfj"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:medication-schedule",
	});
}

export default Component;
