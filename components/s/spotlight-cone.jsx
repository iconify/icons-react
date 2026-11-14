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
		"content": `<style>.k2mootbun {
  d: path("M12 2.5v2m-6 5v-5h12v5");
}

.tp6p58b4s {
  d: path("M8.75 7.25h6.5v4h-6.5Zm1 4L5 18m9.25-6.75L19 18M4.5 19a7.5 2.5 0 1 0 15 0a7.5 2.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k2mootbun"/><path class="tp6p58b4s"/></g>`,
		"fallback": "uix-sharp:spotlight-cone",
	});
}

export default Component;
