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
		"content": `<style>.n8sqmebht {
  d: path("M7 18h10");
}

.s-6rb6b-a {
  d: path("M4 8h16c0 4 -3 7 -8 7s-8 -3 -8 -7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="s-6rb6b-a"/><path class="n8sqmebht"/></g>`,
		"fallback": "iconmind:pet-bowl-outline-bold",
	});
}

export default Component;
