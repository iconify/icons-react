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
		"content": `<style>.a-xc2ibwn {
  d: path("M12 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.g6v1wdg_x {
  d: path("M10 12 6 8");
}

.q1ae0k4gd {
  d: path("m14 16 4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u46xm9b9w {
  d: path("m14 8 -4 4 4 4");
}

.z91-mkbau {
  d: path("M3 20h5");
}
</style><g class="s0phu2bbs"><path class="a-xc2ibwn"/><path class="u46xm9b9w"/><path class="g6v1wdg_x"/><path class="q1ae0k4gd"/><path class="z91-mkbau"/></g>`,
		"fallback": "iconmind:sprint-outline-bold",
	});
}

export default Component;
