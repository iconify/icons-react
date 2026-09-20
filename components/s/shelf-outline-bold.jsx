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
		"content": `<style>.n-7t0yb1r {
  d: path("M3 13h18");
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vxuzbkitn {
  d: path("M5.5 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.z1zyir08z {
  d: path("M14.5 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="ozi-k-boi"/><path class="n-7t0yb1r"/><path class="rkhcgsbdl"/><path class="vxuzbkitn"/><path class="z1zyir08z"/></g>`,
		"fallback": "iconmind:shelf-outline-bold",
	});
}

export default Component;
