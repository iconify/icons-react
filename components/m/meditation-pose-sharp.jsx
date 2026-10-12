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
		"content": `<style>.r8ukr80ck {
  d: path("M12 10.5v4m-4.25 0L12 11l4.25 3.5m-12.5 4.25c0-1.6 3.7-2.75 8.25-2.75s8.25 1.15 8.25 2.75l.281 2.516L18 21.25H6l-2.531.016z");
}

.u782pnb2p {
  cx: 12px;
  cy: 7.25px;
  r: 1.75px;
}

.vx18d8c_y {
  d: path("M5 10a7 7 0 0 1 14 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vx18d8c_y"/><circle class="u782pnb2p"/><path class="r8ukr80ck"/></g>`,
		"fallback": "iconoven:meditation-pose-sharp",
	});
}

export default Component;
