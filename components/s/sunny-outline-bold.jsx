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
		"content": `<style>.e8rvqbc4z {
  d: path("m4 20 3 -3");
}

.jf_v1slmw {
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
}

.p14ag28op {
  d: path("m20 4 -3 3");
}

.pg-wrtbze {
  d: path("m4 4 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yy262cc0h {
  d: path("m20 20 -3 -3");
}
</style><g class="s0phu2bbs"><path class="jf_v1slmw"/><path class="pg-wrtbze"/><path class="p14ag28op"/><path class="e8rvqbc4z"/><path class="yy262cc0h"/></g>`,
		"fallback": "iconmind:sunny-outline-bold",
	});
}

export default Component;
