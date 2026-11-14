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
		"content": `<style>.d_shh2-yl {
  d: path("M12 2.5c3.5 2 4.5 5.5 4.5 9v4h-9v-4c0-3.5 1-7 4.5-9ZM7.5 12l-3 3v2.5l3-2m9-3.5l3 3v2.5l-3-2");
}

.kz7q42brd {
  d: path("M10.5 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-.5 8.75l2 3l2-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d_shh2-yl"/><path class="kz7q42brd"/></g>`,
		"fallback": "uix-sharp:rocket-propulsion",
	});
}

export default Component;
