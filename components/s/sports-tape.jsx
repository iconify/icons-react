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
		"content": `<style>.cnl-h3b9q {
  d: path("M2.5 11.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z");
}

.euzws7l6i {
  d: path("M10.5 19.5h11l-2-3h-2.75M7 11.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cnl-h3b9q"/><path class="euzws7l6i"/></g>`,
		"fallback": "uix-sharp:sports-tape",
	});
}

export default Component;
