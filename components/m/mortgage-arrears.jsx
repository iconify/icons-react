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
		"content": `<style>.ofp0jdbkc {
  d: path("M16 7V4h2v4.75m0 5.75v4m0 2.75h.01");
}

.pklt6v8oy {
  d: path("M15.16 20.5H4v-10l8-7l8 7v1.24");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pklt6v8oy"/><path class="ofp0jdbkc"/></g>`,
		"fallback": "uix-sharp:mortgage-arrears",
	});
}

export default Component;
