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
		"content": `<style>.o8azt6xtq {
  d: path("M10 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM3 20q3-2.25 6 0t6 0t6 0M6.5 11.5h11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbmirtbdo {
  d: path("M6.5 11.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}
</style><g class="ulnmmdpxh"><path class="vbmirtbdo"/><path class="o8azt6xtq"/></g>`,
		"fallback": "uix-sharp:mooring-ball",
	});
}

export default Component;
