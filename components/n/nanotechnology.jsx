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
		"content": `<style>.b4xrkw-at {
  d: path("M6.25 6.25h4v4h-4Z");
}

.cpro7i31k {
  d: path("M3.25 3.25h10v10h-10Zm5 10v4.5h6.5m0 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cpro7i31k"/><path class="b4xrkw-at"/></g>`,
		"fallback": "uix-sharp:nanotechnology",
	});
}

export default Component;
