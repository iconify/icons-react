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
		"content": `<style>.aeyekmbly {
  d: path("M3 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.b6rnmzrfq {
  d: path("M19 11V5");
}

.gnggw0bkv {
  d: path("M7 19v-6");
}

.m7i92hb6f {
  d: path("M13 15V9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ve_htnadp {
  d: path("M15 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.w3qv73i9r {
  d: path("M9 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="aeyekmbly"/><path class="gnggw0bkv"/><path class="w3qv73i9r"/><path class="m7i92hb6f"/><path class="ve_htnadp"/><path class="b6rnmzrfq"/></g>`,
		"fallback": "iconmind:music-scale-outline-bold",
	});
}

export default Component;
