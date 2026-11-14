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
		"content": `<style>.bt0m92p7j {
  d: path("M5.25 11a2.25 1.5 0 1 0 4.5 0a2.25 1.5 0 1 0-4.5 0Zm9 0a2.25 1.5 0 1 0 4.5 0a2.25 1.5 0 1 0-4.5 0Z");
}

.iizzxacfc {
  d: path("M2.5 9c0-1.5 1-2.5 2.5-2.5h14c1.5 0 2.5 1 2.5 2.5v2c0 3.5-2.5 5.5-5.5 5.5c-2 0-3-1.5-4-2.5c-1 1-2 2.5-4 2.5c-3 0-5.5-2-5.5-5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iizzxacfc"/><path class="bt0m92p7j"/></g>`,
		"fallback": "uix-sharp:mask-privacy",
	});
}

export default Component;
