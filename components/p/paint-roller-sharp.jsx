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
		"content": `<style>.gz2v3gbfg {
  d: path("M2.75 2.75h15V9h-15z");
}

.nigv1qg_a {
  d: path("M9 14.5h3.5v6.75H9z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xavey4b-h {
  d: path("M17.75 5.75h3.5v6h-10.5v3");
}
</style><g class="x2cwu0gfd"><path class="gz2v3gbfg"/><path class="xavey4b-h"/><path class="nigv1qg_a"/></g>`,
		"fallback": "iconoven:paint-roller-sharp",
	});
}

export default Component;
