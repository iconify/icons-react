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
		"content": `<style>.de23ghs-u {
  d: path("m3.5 15.5 12 -12a4 4 0 0 1 5 5l-12 12a4 4 0 0 1 -5 -5");
}

.p-3tqnbzb {
  d: path("M9 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.qrqlpabxp {
  d: path("M13 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="de23ghs-u"/><path class="p-3tqnbzb"/><path class="qrqlpabxp"/></g>`,
		"fallback": "iconmind:plaster-outline-bold",
	});
}

export default Component;
