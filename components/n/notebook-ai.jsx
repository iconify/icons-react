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
		"content": `<style>.mtx364rzr {
  d: path("M19.5 21.3v.2h-15v-19h15v12.2M2.5 7h4m-4 5h4m-4 5h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wm-zc7p3r {
  d: path("M18 14.75C18 17 19 18 21.25 18C19 18 18 19 18 21.25C18 19 17 18 14.75 18C17 18 18 17 18 14.75Z");
}
</style><g class="ulnmmdpxh"><path class="mtx364rzr"/><path class="wm-zc7p3r"/></g>`,
		"fallback": "uix-sharp:notebook-ai",
	});
}

export default Component;
