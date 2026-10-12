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
		"content": `<style>.ep1ha2b8w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 19.75h.01m3.99 0h.01m3.99 0h.01");
}

.wn4yxxb-l {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 5.75c5.5-2.5 12-2.5 17.5 0L17.5 11.5h-11ZM8 11.5v5m4-5v5m4-5v5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="wn4yxxb-l"/><path class="ep1ha2b8w"/></g>`,
		"fallback": "iconoven:seed-drill",
	});
}

export default Component;
