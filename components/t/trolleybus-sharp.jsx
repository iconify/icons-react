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
		"content": `<style>.ii4uyg_2s {
  cx: 7px;
  cy: 17.75px;
  r: 2.5px;
}

.sbpdo7bey {
  cx: 17px;
  cy: 17.75px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xgfqikbeq {
  d: path("M2.75 2.75h18.5M7.5 8.5l4.75-5.75M11.5 8.5l4.75-5.75M2.75 8.5h18.5v9H2.75zm3.5 3.75h11.5");
}
</style><g class="x2cwu0gfd"><path class="xgfqikbeq"/><circle class="ii4uyg_2s"/><circle class="sbpdo7bey"/></g>`,
		"fallback": "iconoven:trolleybus-sharp",
	});
}

export default Component;
