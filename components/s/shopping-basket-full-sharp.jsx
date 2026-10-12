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
		"content": `<style>.o3s0krbzt {
  d: path("M13.25 2.75h3.5V10h-3.5zM4.25 13h15.5l1.276.001l-.306 1.239l-1.25 5.1l-.464 1.91H4.994l-.464-1.91l-1.25-5.1l-.306-1.239zM9 15.25v3m3-3v3m3-3v3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yij3ylb0l {
  cx: 8px;
  cy: 7.25px;
  r: 2.75px;
}
</style><g class="x2cwu0gfd"><circle class="yij3ylb0l"/><path class="o3s0krbzt"/></g>`,
		"fallback": "iconoven:shopping-basket-full-sharp",
	});
}

export default Component;
