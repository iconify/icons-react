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
		"content": `<style>.ab69i60qd {
  d: path("M5.5 4H3v16h2.5");
}

.gorvssbqo {
  d: path("M17.5 9.5 20 12l-2.5 2.5");
}

.lgk47ib7d {
  d: path("M14.5 12h3");
}

.ly2b2eaue {
  d: path("M8.5 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.q4hnnr4zu {
  d: path("M8.5 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ab69i60qd"/><path class="q4hnnr4zu"/><path class="ly2b2eaue"/><path class="lgk47ib7d"/><path class="gorvssbqo"/></g>`,
		"fallback": "iconmind:kv-evict-outline-bold",
	});
}

export default Component;
