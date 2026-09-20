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
		"content": `<style>.s-q3mjydn {
  d: path("M9 4v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.so0bhmbof {
  d: path("M11 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.svv6jr1pu {
  d: path("M6 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.x_j9qe7it {
  d: path("M15 4v4");
}
</style><g class="s0phu2bbs"><path class="svv6jr1pu"/><path class="s-q3mjydn"/><path class="x_j9qe7it"/><path class="so0bhmbof"/></g>`,
		"fallback": "iconmind:smart-plug-outline-bold",
	});
}

export default Component;
