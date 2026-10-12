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
		"content": `<style>.imoa1hb-r {
  d: path("m12.55 3.58l3.9 5.84l.55.83H7l.55-.83l3.9-5.84l.55-.83zm-9.8 9.67h8v8h-8z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygphxfbhc {
  cx: 17.25px;
  cy: 17.25px;
  r: 4px;
}
</style><g class="x2cwu0gfd"><path class="imoa1hb-r"/><circle class="ygphxfbhc"/></g>`,
		"fallback": "iconoven:shapes-sharp",
	});
}

export default Component;
