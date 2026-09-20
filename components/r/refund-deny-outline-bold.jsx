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
		"content": `<style>.c0xzggwkx {
  d: path("m13.5 8 4 4");
}

.cpsm-qevf {
  d: path("M9 7.5 6.5 10 9 12.5");
}

.hatc3g_gl {
  d: path("m17.5 8 -4 4");
}

.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.o7jy28bce {
  d: path("M6.5 10H11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="jd_dotbnq"/><path class="o7jy28bce"/><path class="cpsm-qevf"/><path class="c0xzggwkx"/><path class="hatc3g_gl"/></g>`,
		"fallback": "iconmind:refund-deny-outline-bold",
	});
}

export default Component;
