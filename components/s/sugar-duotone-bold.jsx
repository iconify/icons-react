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
		"content": `<style>.fg09jpbsd {
  d: path("M13 5h8v8h-8Z");
}

.izxeldb4t {
  d: path("M3 11h8v8H3Z");
}

.ndtiqfb4f {
  fill: currentColor;
  d: path("M3 11h8v8H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ueyyuelny {
  fill: currentColor;
  d: path("M13 5h8v8h-8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="ndtiqfb4f"/><path class="ueyyuelny"/><path class="izxeldb4t"/><path class="fg09jpbsd"/></g>`,
		"fallback": "iconmind:sugar-duotone-bold",
	});
}

export default Component;
