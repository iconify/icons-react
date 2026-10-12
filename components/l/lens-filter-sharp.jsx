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
		"content": `<style>.gtu1uz6fz {
  d: path("M6.5 9.9a5.5 1.75 0 0 1 11 0a5.5 1.75 0 0 1-11 0Zm2.25 6.35V17m3.25-.5v.75m3.25-1V17m-9.5-1.75v.5m12.5-.5v.5");
}

.mmu9bo8lf {
  d: path("M2.75 9.9a9.25 4.5 0 0 0 18.5 0");
}

.qqrphjjlv {
  d: path("M2.75 9.9a9.25 4.5 0 0 1 18.5 0v4.2a9.25 4.5 0 0 1-18.5 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qqrphjjlv"/><path class="mmu9bo8lf"/><path class="gtu1uz6fz"/></g>`,
		"fallback": "iconoven:lens-filter-sharp",
	});
}

export default Component;
