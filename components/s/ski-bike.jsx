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
		"content": `<style>.gza-m1bif {
  d: path("M13.5 19H20a2 2 0 0 0 2-2");
}

.lptewns2i {
  d: path("m5 19l3.5-8.5H15l2.5 8.5m-9-8.5v-3m-1.75 0h4m4.25 3L14 6h3M2.5 19H8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lptewns2i"/><path class="gza-m1bif"/></g>`,
		"fallback": "uix-sharp:ski-bike",
	});
}

export default Component;
