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
		"content": `<style>.cpn2b2b2g {
  d: path("M19 12h2.25m-4.3 4.95l1.59 1.59M12 19v2.25m-4.95-4.3l-1.59 1.59M5 12H2.75m4.3-4.95L5.46 5.46M12 5V2.75m4.95 4.3l1.59-1.59");
}

.qy4e2ebar {
  cx: 12px;
  cy: 12px;
  r: 4.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="qy4e2ebar"/><path class="cpn2b2b2g"/></g>`,
		"fallback": "iconoven:sun-sharp",
	});
}

export default Component;
