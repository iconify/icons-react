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
		"content": `<style>.cew424s2o {
  d: path("M4.5 13h-2v3h2m2-10.5l5.5-3l5.5 3l-5.5 3Zm1.25 7.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z1xepr2cx {
  d: path("M4 14.5c0-3.5 3.5-6 8-6s8 2.5 8 6c0 2.25-1.25 4-3.5 5V22H14v-1.75c-.75.25-1.25.25-2 .25s-1.25 0-2-.25V22H7.5v-2.5c-2.25-1-3.5-2.75-3.5-5Z");
}
</style><g class="ulnmmdpxh"><path class="z1xepr2cx"/><path class="cew424s2o"/></g>`,
		"fallback": "uix-sharp:life-child-plan",
	});
}

export default Component;
