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
		"content": `<style>.md2nxfbwe {
  d: path("m15.5 9l-3 3l3 3");
}

.u5cr2vpme {
  d: path("M2.5 4h19v16h-19Zm6 0v16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u5cr2vpme"/><path class="md2nxfbwe"/></g>`,
		"fallback": "uix-sharp:sidebar-toggle",
	});
}

export default Component;
