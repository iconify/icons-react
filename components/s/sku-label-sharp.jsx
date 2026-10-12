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
		"content": `<style>.f__gbmrya {
  d: path("M11.5 9.25v5.5m2.5-5.5v5.5m2.5-5.5v5.5");
}

.g8q59cbpc {
  cx: 7.5px;
  cy: 12px;
  r: 1.1px;
}

.v67nowbqx {
  d: path("M8.66 5.75h12.59v12.5H8.66l-.886-.002l-.594-.658l-3.86-4.25L2.111 12l1.209-1.34l3.86-4.25l.594-.658z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="v67nowbqx"/><circle class="g8q59cbpc"/><path class="f__gbmrya"/></g>`,
		"fallback": "iconoven:sku-label-sharp",
	});
}

export default Component;
