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
		"content": `<style>.e9evis00r {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4.75V7m3.3 2.89L14 16.16l-.1.49l-.2-.46l-1.15-2.68l-.2-.46l-.49-.12l-2.82-.66l-.49-.12l.46-.19l5.93-2.37l.46-.19z");
}

.r-szyebfg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 16.75h.01");
}

.sf-oocn4o {
  cx: 12px;
  cy: 13px;
  r: 8.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="sf-oocn4o"/><path class="e9evis00r"/><path class="r-szyebfg"/></g>`,
		"fallback": "iconoven:minimap-sharp",
	});
}

export default Component;
