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
		"content": `<style>.c8p2edctq {
  d: path("m9 6 6 6h6");
}

.kzxwn_jgc {
  d: path("M15 12v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ujw9c-ben {
  d: path("m3 12 6 -6h6l6 6 -6 6H9Z");
}
</style><g class="s0phu2bbs"><path class="ujw9c-ben"/><path class="c8p2edctq"/><path class="kzxwn_jgc"/></g>`,
		"fallback": "iconmind:rock-outline-bold",
	});
}

export default Component;
