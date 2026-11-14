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
		"content": `<style>.dircu6b5e {
  d: path("M16.5 4.75L12 2.5L3 7v10l9 4.5l9-4.5v-4.75");
}

.j8mwjdp0l {
  d: path("M16.5 4.75v4.5l4.5 3M3 7l9 4.5l4.5-2.25M12 11.5v10m6-16l1.5.75M21 8.5V10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dircu6b5e"/><path class="j8mwjdp0l"/></g>`,
		"fallback": "uix-sharp:shrinkage",
	});
}

export default Component;
