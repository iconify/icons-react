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

.g9aruybwn {
  d: path("m12 7 5 5 -5 5 -5 -5Z");
}

.obv949kbf {
  fill: currentColor;
  d: path("m12 7 5 5 -5 5 -5 -5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
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
</style><g class="s0phu2bbs"><path class="obv949kbf"/><path class="g9aruybwn"/><path class="pg-wrtbze"/><path class="p14ag28op"/><path class="e8rvqbc4z"/><path class="yy262cc0h"/></g>`,
		"fallback": "iconmind:north-star-duotone-bold",
	});
}

export default Component;
