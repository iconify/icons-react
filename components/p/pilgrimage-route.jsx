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
		"content": `<style>.lp474h64a {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 7h.01M3.5 20.25h.01m3.49-.5h.01m2.74-2.25h.01m2.99-1.25h.01m2.99-.75h.01");
}

.mpqqeubcg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 2.75A4.25 4.25 0 0 1 21.25 7c0 3-4.25 6.5-4.25 6.5S12.75 10 12.75 7A4.25 4.25 0 0 1 17 2.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="mpqqeubcg"/><path class="lp474h64a"/></g>`,
		"fallback": "iconoven:pilgrimage-route",
	});
}

export default Component;
