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
		"content": `<style>.u1h5kpqjv {
  d: path("M9.75 10.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM8.5 16.5h3.7m2.8 1h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vt7wmabgf {
  d: path("M10 5.5v-3h4v3m-1.8 16H5v-16h14v6.8");
}
</style><g class="ulnmmdpxh"><path class="vt7wmabgf"/><path class="u1h5kpqjv"/></g>`,
		"fallback": "uix-sharp:press-pass-lock",
	});
}

export default Component;
