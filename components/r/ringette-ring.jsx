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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yks8e7b7q {
  d: path("M7 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM20.5 2.5l-8 9");
}

.zo56sezxh {
  d: path("M4 15a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}
</style><g class="ulnmmdpxh"><path class="zo56sezxh"/><path class="yks8e7b7q"/></g>`,
		"fallback": "uix-sharp:ringette-ring",
	});
}

export default Component;
