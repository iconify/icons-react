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
		"content": `<style>.abn8r0bcw {
  d: path("M16.5 14.25h3v2h-3Zm.25 4.5h2.5");
}

.oblb4qk2r {
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4 21c0-3.98 3.466-6.475 7.934-6.5m2.816.75h6.5v6.5h-6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oblb4qk2r"/><path class="abn8r0bcw"/></g>`,
		"fallback": "uix-sharp:property-manager",
	});
}

export default Component;
