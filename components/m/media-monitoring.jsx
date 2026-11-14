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
		"content": `<style>.krdrgcbvl {
  d: path("M6 10h2.5l2-3l2.5 6l2-3h3");
}

.qflg01q3e {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-3.5 0h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qflg01q3e"/><path class="krdrgcbvl"/></g>`,
		"fallback": "uix-sharp:media-monitoring",
	});
}

export default Component;
