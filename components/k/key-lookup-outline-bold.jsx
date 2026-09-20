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
		"content": `<style>.m2_htfbkw {
  d: path("m17 16 4 4");
}

.m2vc0klek {
  d: path("M12 12.5h2.5");
}

.rcb4z6b_d {
  d: path("M5 11a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xpjur0b_h {
  d: path("M12 11.5V14");
}

.xrw775b-m {
  d: path("M10 9.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="rcb4z6b_d"/><path class="m2_htfbkw"/><path class="xrw775b-m"/><path class="xpjur0b_h"/><path class="m2vc0klek"/></g>`,
		"fallback": "iconmind:key-lookup-outline-bold",
	});
}

export default Component;
