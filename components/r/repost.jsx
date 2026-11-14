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
		"content": `<style>.n_oxc8rru {
  d: path("M6 6v9.5A2.5 2.5 0 0 0 8.5 18H13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x2vm17iag {
  d: path("m15 15l3 3l3-3");
}

.zzitdvf-y {
  d: path("m3 9l3-3l3 3m2-3h4.5A2.5 2.5 0 0 1 18 8.5V18");
}
</style><g class="ulnmmdpxh"><path class="n_oxc8rru"/><path class="zzitdvf-y"/><path class="x2vm17iag"/></g>`,
		"fallback": "uix-sharp:repost",
	});
}

export default Component;
