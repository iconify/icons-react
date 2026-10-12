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
		"content": `<style>.mdswc-b6o {
  cx: 9px;
  cy: 9px;
  r: 6.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf10smbnt {
  d: path("M9 5.75V9l2.25 1.5m7.37 1.71l-3.74 4.58l-.38.46h3l-.11.59l-.53 2.82l-.11.59l.37-.47l3.76-4.81l.37-.47h-3l.12-.59l.51-2.57l.12-.59z");
}
</style><g class="x2cwu0gfd"><circle class="mdswc-b6o"/><path class="zf10smbnt"/></g>`,
		"fallback": "iconoven:kilowatt-hour-sharp",
	});
}

export default Component;
