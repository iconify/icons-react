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
		"content": `<style>.qavx7u_3d {
  d: path("M13.25 13.25a1.4 1.4 0 0 1 1 2.5a1.4 1.4 0 0 1-2.25 1.5a1.4 1.4 0 0 1-2.25-1.5a1.4 1.4 0 0 1 1-2.5a1.4 1.4 0 0 1 2.5 0ZM12 15h.01");
}

.twiy9obyn {
  d: path("M3 4h18v17H3Zm5-1.5V6m8-3.5V6M3 9h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="twiy9obyn"/><path class="qavx7u_3d"/></g>`,
		"fallback": "uix-sharp:spring-calendar",
	});
}

export default Component;
