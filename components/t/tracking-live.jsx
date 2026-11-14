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
		"content": `<style>.nke9ovbpb {
  d: path("M5.5 5.5a9 9 0 0 0 0 13m13-13a9 9 0 0 1 0 13");
}

.p74nhaccs {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM7.5 7.5a6.5 6.5 0 0 0 0 9m9-9a6.5 6.5 0 0 1 0 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p74nhaccs"/><path class="nke9ovbpb"/></g>`,
		"fallback": "uix-sharp:tracking-live",
	});
}

export default Component;
