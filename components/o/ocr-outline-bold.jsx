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
		"content": `<style>.a-r3j5f7z {
  d: path("M3 16v4h5");
}

.a71lhwniq {
  d: path("M16 4h5v4");
}

.dxxnlbcax {
  d: path("M3 8V4h5");
}

.qvytntb8g {
  d: path("M7 10h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s13ysjbyf {
  d: path("M7 14h7");
}

.xt7079b9x {
  d: path("M16 20h5v-4");
}
</style><g class="s0phu2bbs"><path class="dxxnlbcax"/><path class="a71lhwniq"/><path class="a-r3j5f7z"/><path class="xt7079b9x"/><path class="qvytntb8g"/><path class="s13ysjbyf"/></g>`,
		"fallback": "iconmind:ocr-outline-bold",
	});
}

export default Component;
