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
		"content": `<style>.j3gg_lb4w {
  d: path("M16.5 6H19");
}

.le4-j1b7w {
  d: path("M9 6a3 3 0 0 1 3 -3 3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3Z");
}

.lkvhsog-e {
  d: path("M16.5 10H19");
}

.mhn2foozi {
  d: path("M12 11v3.5");
}

.rxj7i8-nj {
  d: path("M9 18a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="le4-j1b7w"/><path class="rxj7i8-nj"/><path class="mhn2foozi"/><path class="j3gg_lb4w"/><path class="lkvhsog-e"/></g>`,
		"fallback": "iconmind:temperature-low-outline-bold",
	});
}

export default Component;
