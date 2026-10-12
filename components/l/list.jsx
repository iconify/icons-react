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
		"content": `<style>.lcmqtccog {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 6h11m-11 6h11m-11 6h11");
}

.wqbhr255g {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.25 6h.01m-.01 6h.01m-.01 6h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="lcmqtccog"/><path class="wqbhr255g"/></g>`,
		"fallback": "iconoven:list",
	});
}

export default Component;
