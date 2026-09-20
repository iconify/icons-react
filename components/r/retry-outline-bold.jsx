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
		"content": `<style>.d8z1r1beo {
  d: path("M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sobs47b0t {
  d: path("M12 2 9 5l3 3");
}
</style><g class="s0phu2bbs"><path class="d8z1r1beo"/><path class="sobs47b0t"/></g>`,
		"fallback": "iconmind:retry-outline-bold",
	});
}

export default Component;
