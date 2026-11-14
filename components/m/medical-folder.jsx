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
		"content": `<style>.h725mi3uh {
  d: path("M2.5 18.5v-13c0-1.1.9-2 2-2H9l2 2h8.5c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2h-15c-1.1 0-2-.9-2-2Zm0-9.75h19");
}

.r-9u518oq {
  d: path("M6 18.25h1.5m9 0H18");
}

.r4jdxm43t {
  fill: currentColor;
  d: path("M10.5 10.5h3V13H16v3h-2.5v2.5h-3V16H8v-3h2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h725mi3uh"/><path class="r4jdxm43t"/><path class="r-9u518oq"/></g>`,
		"fallback": "uix-sharp:medical-folder",
	});
}

export default Component;
