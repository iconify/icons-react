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
		"content": `<style>.pdplahujw {
  d: path("M21.25 3.25L17 9.5m-14.25 0H17m-4 0v4m-8-4v6");
}

.rupz06b6d {
  cx: 5px;
  cy: 17.5px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjhu9m4ww {
  d: path("M9 13.5h7l3 4l1.2 1.6H9v-2Z");
}
</style><g class="x2cwu0gfd"><path class="pdplahujw"/><circle class="rupz06b6d"/><path class="zjhu9m4ww"/></g>`,
		"fallback": "iconoven:plough-sharp",
	});
}

export default Component;
