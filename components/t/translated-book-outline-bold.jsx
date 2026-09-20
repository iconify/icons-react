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
		"content": `<style>.bk1x3j91g {
  d: path("m19 12 -3 3");
}

.f6u82o00r {
  d: path("M13.5 9v6");
}

.oqi-cobmu {
  d: path("M12 9h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tlv50fbjr {
  d: path("m16 12 3 3");
}

.wuvisubmw {
  d: path("M8 3v18");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="y4_6s7b5v"/><path class="wuvisubmw"/><path class="oqi-cobmu"/><path class="f6u82o00r"/><path class="tlv50fbjr"/><path class="bk1x3j91g"/></g>`,
		"fallback": "iconmind:translated-book-outline-bold",
	});
}

export default Component;
