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
		"content": `<style>.laupq6byw {
  d: path("M4 20.25h6.75v-.75c0-2.9-1.7-5-3.75-5s-3.75 2.1-3.75 5v.75z");
}

.nomrmkbdu {
  d: path("M14 20.25h6.75v-.75c0-2.9-1.7-5-3.75-5s-3.75 2.1-3.75 5v.75z");
}

.ttdy-b6jx {
  cx: 7px;
  cy: 7.5px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yfr-mbcnn {
  cx: 17px;
  cy: 7.5px;
  r: 3px;
}
</style><g class="x2cwu0gfd"><circle class="ttdy-b6jx"/><path class="laupq6byw"/><circle class="yfr-mbcnn"/><path class="nomrmkbdu"/></g>`,
		"fallback": "iconoven:partnership-sharp",
	});
}

export default Component;
