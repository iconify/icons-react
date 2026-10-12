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
		"content": `<style>.rnz8zdkzz {
  d: path("M17.5 11L16 13l1.5 1.5M2.75 17.75h18.5v3.5H2.75zm5.5.5v2.5");
}

.sb62xsevh {
  d: path("M3.25 14.75V6.5l-.043-1.334L4.5 5.5l3.25.75l.75 2.25h4l5.3 2.15l3.45 1.411v2.689ZM12.5 9l-.75 1.5M15 10l-.75 1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sb62xsevh"/><path class="rnz8zdkzz"/></g>`,
		"fallback": "iconoven:oxford-shoe-sharp",
	});
}

export default Component;
