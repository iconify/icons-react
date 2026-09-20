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
		"content": `<style>.gtsw5xviq {
  d: path("M17 5v14");
}

.oe2rn1bbo {
  d: path("M14 12h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zqoml3bvy {
  d: path("M11.11 7.47a5 5 0 1 1 -4.22 0");
}
</style><g class="s0phu2bbs"><path class="zqoml3bvy"/><path class="oe2rn1bbo"/><path class="gtsw5xviq"/></g>`,
		"fallback": "iconmind:leash-short-outline-bold",
	});
}

export default Component;
