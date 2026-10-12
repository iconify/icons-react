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
		"content": `<style>.d3yh5cbqf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4.5h.01");
}

.t6-ywobow {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h18M4 10h16v10H4z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="d3yh5cbqf"/><path class="t6-ywobow"/></g>`,
		"fallback": "iconoven:masala-dabba-sharp",
	});
}

export default Component;
