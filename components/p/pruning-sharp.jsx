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
		"content": `<style>.g175mzbno {
  cx: 5px;
  cy: 5.5px;
  r: 2.25px;
}

.luw3jwbbi {
  cx: 19px;
  cy: 12px;
  r: 2.25px;
}

.sjau3e9js {
  d: path("m7.25 17.5l9.5-4.5m-9.5-6.5L9.5 7.55m5 2.4L16.75 11m-6-3.5l2.5 2.5m0-2.5l-2.5 2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xxhysckdf {
  cx: 5px;
  cy: 18.5px;
  r: 2.25px;
}
</style><g class="x2cwu0gfd"><circle class="g175mzbno"/><circle class="xxhysckdf"/><circle class="luw3jwbbi"/><path class="sjau3e9js"/></g>`,
		"fallback": "iconoven:pruning-sharp",
	});
}

export default Component;
