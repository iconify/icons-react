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

.x0a1ufw4y {
  d: path("M7.75 8c0 5 2.25 8 4.25 8.5c2-.5 4.25-3.5 4.25-8.5M3.5 21.5c0-2.5 1.75-3.75 4.5-4m8 0c2.75.25 4.5 1.5 4.5 4");
}

.zs0e8_bdm {
  d: path("M7.75 7.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="zs0e8_bdm"/><path class="x0a1ufw4y"/></g>`,
		"fallback": "uix-sharp:person-bearded",
	});
}

export default Component;
