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
		"content": `<style>.m2_9-pz2k {
  d: path("M2.5 3.5h19v17h-19Zm12.5 0v17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zub4acc2g {
  d: path("m7.5 9l3 3l-3 3");
}
</style><g class="ulnmmdpxh"><path class="m2_9-pz2k"/><path class="zub4acc2g"/></g>`,
		"fallback": "uix-sharp:panel-right",
	});
}

export default Component;
