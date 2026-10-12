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
		"content": `<style>.fjgjo__bn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 8.75h12.5V12H5.75z");
}

.q1oy59b8h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.75h18.5v12.5H2.75z");
}

.qy1h400-r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 16h.01M12 16h.01M16 16h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="q1oy59b8h"/><path class="fjgjo__bn"/><path class="qy1h400-r"/></g>`,
		"fallback": "iconoven:pager-sharp",
	});
}

export default Component;
