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
		"content": `<style>.cql1pwtbp {
  cx: 12px;
  cy: 16px;
  r: 2px;
}

.j8tg4ubhf {
  d: path("M6.25 2.75h11.5v18.5H6.25zm3 3.5h5.5m-5.5 3h5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="j8tg4ubhf"/><circle class="cql1pwtbp"/></g>`,
		"fallback": "iconoven:tower-pc-sharp",
	});
}

export default Component;
