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
		"content": `<style>.j5gh1fblk {
  d: path("m8 14l4-3.5l4 3.5v4H8Z");
}

.ptf-lmb_d {
  d: path("M2.5 3.5h19v17h-19Zm0 4h19m-16.25-2h.01m2.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ptf-lmb_d"/><path class="j5gh1fblk"/></g>`,
		"fallback": "uix-sharp:tenant-portal",
	});
}

export default Component;
