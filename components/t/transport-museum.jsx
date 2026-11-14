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
		"content": `<style>.o950tob6b {
  d: path("M14.5 19.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.u21ay5bih {
  d: path("M16 7V4h2v4.75m-4.5 9.75v-2a1 1 0 0 1 1-1l1.5-2h3.5l1.5 2a1 1 0 0 1 1 1v2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8uxmzbsa {
  d: path("M10.66 20.5H4v-10l8-7l8 7v.24");
}
</style><g class="ulnmmdpxh"><path class="w8uxmzbsa"/><path class="u21ay5bih"/><path class="o950tob6b"/></g>`,
		"fallback": "uix-sharp:transport-museum",
	});
}

export default Component;
