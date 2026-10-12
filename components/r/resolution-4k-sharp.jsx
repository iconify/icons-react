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
		"content": `<style>.fha6990wp {
  d: path("M2.75 4.75h18.5v14.5H2.75z");
}

.gwz11sbgm {
  d: path("M9.75 15.75v-7.5l-4 5.25h5.5m2.5-5.25v7.5m4.5-7.5l-4.5 4l4.5 3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fha6990wp"/><path class="gwz11sbgm"/></g>`,
		"fallback": "iconoven:resolution-4k-sharp",
	});
}

export default Component;
