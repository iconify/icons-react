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
		"content": `<style>.jdinfrbxs {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.96 7.25a3 3 0 1 0-3.46 3.46");
}

.ow73bhs5r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.5 11.75h.01M13.5 16h.01");
}

.qysga69jn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 7.25h7.25a4 4 0 0 1 4 4v5.25a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8a.75.75 0 0 1 .75-.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="qysga69jn"/><path class="jdinfrbxs"/><path class="ow73bhs5r"/></g>`,
		"fallback": "iconoven:key-wireless",
	});
}

export default Component;
