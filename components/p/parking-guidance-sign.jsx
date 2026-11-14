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
		"content": `<style>.ja5f5mwdu {
  d: path("M9 6h2.5a2 2 0 0 1 0 4H9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x1lvshbah {
  d: path("M2.5 3h14l5 5.5l-5 5.5h-14ZM6 14v7.5M9 6v5.25");
}
</style><g class="ulnmmdpxh"><path class="x1lvshbah"/><path class="ja5f5mwdu"/></g>`,
		"fallback": "uix-sharp:parking-guidance-sign",
	});
}

export default Component;
