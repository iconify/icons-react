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
		"content": `<style>.k6nj2fbya {
  d: path("M3 5h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vwjk1ok-c {
  d: path("M3 17h4l2.5 -2.5L12 17l2.5 -2.5L17 17h4");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="s0phu2bbs"><path class="k6nj2fbya"/><path class="x50q_4bdr"/><path class="vwjk1ok-c"/></g>`,
		"fallback": "iconmind:transcribe-live-outline-bold",
	});
}

export default Component;
