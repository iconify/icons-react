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
		"content": `<style>.pfpt48slt {
  cx: 12px;
  cy: 12px;
  r: 5.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xlifbgbxq {
  d: path("M8.75 10h6.5m3.6 2.45a9.25 2.75 20 1 1-12.4-4.52");
}
</style><g class="x2cwu0gfd"><circle class="pfpt48slt"/><path class="xlifbgbxq"/></g>`,
		"fallback": "iconoven:saturn-sharp",
	});
}

export default Component;
