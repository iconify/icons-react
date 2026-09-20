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
		"content": `<style>.en0j5saud {
  d: path("M3 14h12");
}

.j835zw5-z {
  d: path("M3 9h18");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.nk7549ffs {
  d: path("m7 16.5 5 -5");
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
</style><g class="s0phu2bbs"><path class="mg7aqnbsf"/><path class="j835zw5-z"/><path class="en0j5saud"/><path class="rkhcgsbdl"/><path class="nk7549ffs"/></g>`,
		"fallback": "iconmind:unused-export-outline-bold",
	});
}

export default Component;
