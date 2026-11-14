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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zkwwlrbxb {
  d: path("M8 17v-4.5l5 4.5Z");
}

.zlresw1uy {
  d: path("M4 20.5v-16l16 16Z");
}
</style><g class="ulnmmdpxh"><path class="zlresw1uy"/><path class="zkwwlrbxb"/></g>`,
		"fallback": "uix-sharp:set-square",
	});
}

export default Component;
