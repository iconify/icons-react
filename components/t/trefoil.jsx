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
		"content": `<style>.afk3glbhf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12.75h.01");
}

.n_x65smdd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.1 10.5a4.5 4.5 0 1 1 7.8 0a4.5 4.5 0 1 1-3.9 6.75a4.5 4.5 0 1 1-3.9-6.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="n_x65smdd"/><path class="afk3glbhf"/></g>`,
		"fallback": "iconoven:trefoil",
	});
}

export default Component;
