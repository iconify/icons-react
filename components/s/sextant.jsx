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
		"content": `<style>.i_szjxb6h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5L3.25 18.66a17.5 17.5 0 0 0 17.5 0Zm0 6l2.25 6");
}

.m9me6bb5j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 9.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="i_szjxb6h"/><path class="m9me6bb5j"/></g>`,
		"fallback": "iconoven:sextant",
	});
}

export default Component;
