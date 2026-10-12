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
		"content": `<style>.m91w6bc5s {
  d: path("M14 2.75v8.5a2.75 2.75 0 0 1-5.5 0V8.5l.117-1.37h2.75L11.25 8.5v2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zspelacll {
  d: path("M4.75 4.75h14.5v16.5H4.75zm3.5 13h7.5");
}
</style><g class="x2cwu0gfd"><path class="zspelacll"/><path class="m91w6bc5s"/></g>`,
		"fallback": "iconoven:paper-clip-sharp",
	});
}

export default Component;
