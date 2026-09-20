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
		"content": `<style>.cjsg0ab2y {
  d: path("M2 20h20");
}

.igyz-cc5b {
  d: path("M3 20a5 5 0 0 1 10 0");
}

.j3fr8pubv {
  d: path("M3 6h15");
}

.lmi4eb-oe {
  d: path("M5 10h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zhhqt74pq {
  d: path("M13 20a4 4 0 0 1 8 0");
}
</style><g class="s0phu2bbs"><path class="j3fr8pubv"/><path class="lmi4eb-oe"/><path class="igyz-cc5b"/><path class="zhhqt74pq"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:sandstorm-outline-bold",
	});
}

export default Component;
