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
		"content": `<style>.e5cehub1r {
  fill: currentColor;
  d: path("M16.5 4c2.75 0 5 2.5 5 5.5h-2.25c0-1.5-1-1.75-2.75-1.75Z");
}

.i_fi9xb3v {
  d: path("M11 6L8 21.5M11 6l3 15.5");
}

.mfs2uub9i {
  fill: currentColor;
  d: path("M2.5 12h4v4h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_x299bxb {
  d: path("M4.5 6h12");
}

.x1e7ivbes {
  d: path("M4.5 6v6m16-2.5V18M19 18h3v3.5h-3ZM2 21.5h20");
}
</style><g class="ulnmmdpxh"><path class="w_x299bxb"/><path class="e5cehub1r"/><path class="i_fi9xb3v"/><path class="mfs2uub9i"/><path class="x1e7ivbes"/></g>`,
		"fallback": "uix-sharp:pumpjack",
	});
}

export default Component;
