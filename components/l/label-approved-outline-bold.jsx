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
		"content": `<style>.c3ldwck9a {
  d: path("m9 13.5 2 2 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}
</style><g class="s0phu2bbs"><path class="w3hyiobto"/><path class="c3ldwck9a"/></g>`,
		"fallback": "iconmind:label-approved-outline-bold",
	});
}

export default Component;
