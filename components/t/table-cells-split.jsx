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
		"content": `<style>.j0977jdqt {
  d: path("m7.5 10l-2 2l2 2m7.5-2h3.5m-2-2l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwk9ecb2i {
  d: path("M2.5 5h19v14h-19ZM12 5v14m-3-7H5.5");
}
</style><g class="ulnmmdpxh"><path class="uwk9ecb2i"/><path class="j0977jdqt"/></g>`,
		"fallback": "uix-sharp:table-cells-split",
	});
}

export default Component;
