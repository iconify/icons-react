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
		"content": `<style>.ry4e-qb3v {
  d: path("M8.5 13.75h7a2 2 0 0 0 .25-4A3.5 3.5 0 0 0 9 9.5a2.25 2.25 0 0 0-.5 4.25ZM9 16.5L8 19m4.5-2.5l-1 2.5m4.5-2.5L15 19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.un2p4skxe {
  d: path("M3 4h18v17.75H3Zm5-1.5v3m8-3v3");
}
</style><g class="ulnmmdpxh"><path class="un2p4skxe"/><path class="ry4e-qb3v"/></g>`,
		"fallback": "uix-sharp:monsoon-season",
	});
}

export default Component;
