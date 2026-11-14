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
		"content": `<style>.aopv0ke_q {
  d: path("m19.25 9.5l-2.25 2L14 9l-3.75 1.25l-2.25 3");
}

.ca4ux1cmk {
  d: path("M14 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM14 9l-2.25 5.5l4 2.5l-.75 4.5m-3.25-7L9 18.25l-4.25.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ca4ux1cmk"/><path class="aopv0ke_q"/></g>`,
		"fallback": "uix-sharp:running",
	});
}

export default Component;
