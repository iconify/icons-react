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
		"content": `<style>.p3awh0b7d {
  d: path("M14 2.5v5h5M8.5 12h.01m2.99 0h4m-7 4.5h.01m2.99 0h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vp3_m3b5w {
  d: path("M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-12Z");
}
</style><g class="ulnmmdpxh"><path class="vp3_m3b5w"/><path class="p3awh0b7d"/></g>`,
		"fallback": "uix-sharp:team-roster",
	});
}

export default Component;
