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
		"content": `<style>.al12gft3b {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.75 4.75h.01");
}

.fy-m9id4m {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 10.75c.5 1 1.5 1.5 2.5 1.5m1.5 8c2 0 3.75-.5 5-1.75");
}

.w50z9ub_z {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 5.5c0-.5.3-.85.75-1l2.25-.9c.5-.6 1.25-.85 2-.85c1.4 0 2.5 1.1 2.5 2.5v2.5c1.25 2 1.75 4.5 1.75 7.25q0 3-.75 5.25h-5.5c-.5-1.75-.75-3.75-.75-5.75c0-2.25.5-4.25 1.25-6L7 6.5c-.45-.1-.75-.5-.75-1");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="w50z9ub_z"/><path class="fy-m9id4m"/><path class="al12gft3b"/></g>`,
		"fallback": "iconoven:meerkat",
	});
}

export default Component;
