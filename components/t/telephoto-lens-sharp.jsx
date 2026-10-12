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
		"content": `<style>.j6n_so0fs {
  d: path("M10.25 13.25H12v4.25h2.5V20H7v-2.5h2.5v-4.25z");
}

.k1n70-b6k {
  d: path("M4 6.75h11.25v-2h6v10.5h-6v-2H2.75v-6.5zm1 0v6.5m2.5-6.5v6.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="k1n70-b6k"/><path class="j6n_so0fs"/></g>`,
		"fallback": "iconoven:telephoto-lens-sharp",
	});
}

export default Component;
