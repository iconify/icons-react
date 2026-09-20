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
		"content": `<style>.c9-0s6xhx {
  d: path("m16 3 2 2 -2 2");
}

.hj9iwxbta {
  d: path("M2 10a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.i0wu9pzyn {
  d: path("m8 17 -2 2 2 2");
}

.jw66ugylr {
  d: path("M14 10a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.olqfcgidt {
  d: path("M6 19h12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s994z3b0d {
  d: path("M6 5h12");
}
</style><g class="s0phu2bbs"><path class="hj9iwxbta"/><path class="jw66ugylr"/><path class="s994z3b0d"/><path class="c9-0s6xhx"/><path class="olqfcgidt"/><path class="i0wu9pzyn"/></g>`,
		"fallback": "iconmind:replication-geo-outline-bold",
	});
}

export default Component;
