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
		"content": `<style>.ilmollb_f {
  d: path("M2.75 8.75h13V20.5h-13z");
}

.kb5j5hb3j {
  cx: 7.75px;
  cy: 16.25px;
  r: 1.5px;
}

.pd2s03bbm {
  d: path("M9.25 16.25v-4.5l2 .75");
}

.qphnqcrvy {
  d: path("M5.5 6H18v11.75M8 3.25h12.25V15");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ilmollb_f"/><path class="qphnqcrvy"/><circle class="kb5j5hb3j"/><path class="pd2s03bbm"/></g>`,
		"fallback": "iconoven:song-queue-sharp",
	});
}

export default Component;
