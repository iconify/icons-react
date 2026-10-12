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
		"content": `<style>.lurr01srd {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.75 9h.01m-.01 3.5h.01m6.24-3h.01M12 13h.01m6.24-3h.01m-.01 3.5h.01");
}

.pywx0pb8w {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.45 4.73L7.8 3.02l.7-.27l.71.23l5.58 1.79l.71.23l.7-.27l4.35-1.71l.7-.27V19l-.7.27l-4.35 1.71l-.7.27l-.71-.23l-5.58-1.79L8.5 19l-.7.27l-4.35 1.71l-.7.27V5zM8.5 3v16m7-14v16");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="pywx0pb8w"/><path class="lurr01srd"/></g>`,
		"fallback": "iconoven:tactile-map-sharp",
	});
}

export default Component;
