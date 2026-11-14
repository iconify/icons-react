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
		"content": `<style>.l6yxv8r2a {
  d: path("M13.36 20.5H4v-10l8-7l8 7v2.34");
}

.q82odgr9k {
  d: path("M16 7V4h2v4.75M14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l6yxv8r2a"/><path class="q82odgr9k"/></g>`,
		"fallback": "uix-sharp:mortgage-completion",
	});
}

export default Component;
