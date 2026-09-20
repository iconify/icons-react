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
		"content": `<style>.dm_ar8wjk {
  d: path("m3 7 2 2 3 -3");
}

.g9c4ykb9u {
  d: path("M11 12h10");
}

.myi37dz6l {
  d: path("m3 17 2 2 3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.syk7o8b5x {
  d: path("M11 17h10");
}

.z4f7qacqo {
  d: path("m3 12 2 2 3 -3");
}

.z5u11lbdo {
  d: path("M11 7h10");
}
</style><g class="s0phu2bbs"><path class="dm_ar8wjk"/><path class="z5u11lbdo"/><path class="z4f7qacqo"/><path class="g9c4ykb9u"/><path class="myi37dz6l"/><path class="syk7o8b5x"/></g>`,
		"fallback": "iconmind:list-checks-outline-bold",
	});
}

export default Component;
