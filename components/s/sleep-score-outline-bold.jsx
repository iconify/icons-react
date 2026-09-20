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
		"content": `<style>.myjbv3u_w {
  d: path("M22 10v10");
}

.o-slvjo4a {
  d: path("M19 14v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v105zmblb {
  d: path("M15 3a9 9 0 1 0 0 18 7 7 0 0 1 0 -18");
}
</style><g class="s0phu2bbs"><path class="v105zmblb"/><path class="o-slvjo4a"/><path class="myjbv3u_w"/></g>`,
		"fallback": "iconmind:sleep-score-outline-bold",
	});
}

export default Component;
