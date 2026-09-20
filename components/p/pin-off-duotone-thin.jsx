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
		"content": `<style>.c7kjqqh8k {
  d: path("M7 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.dsyn-2b9s {
  d: path("M10 10v7");
}

.hmwrvubhz {
  fill: currentColor;
  d: path("M7 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nnj9-vbsr {
  d: path("M5 21 19 7");
}
</style><g class="hntgybcog"><path class="hmwrvubhz"/><path class="c7kjqqh8k"/><path class="dsyn-2b9s"/><path class="nnj9-vbsr"/></g>`,
		"fallback": "iconmind:pin-off-duotone-thin",
	});
}

export default Component;
