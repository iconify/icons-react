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

.vt4qe7bak {
  d: path("M4 20C6 4 14 2.5 17.5 10");
}

.x--d1ubld {
  d: path("M16 12.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM2.5 20h19");
}
</style><g class="ulnmmdpxh"><path class="vt4qe7bak"/><path class="x--d1ubld"/></g>`,
		"fallback": "uix-sharp:trajectory",
	});
}

export default Component;
