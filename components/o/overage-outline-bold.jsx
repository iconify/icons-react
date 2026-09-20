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
		"content": `<style>.cfd43lbgp {
  d: path("M7 13h10");
}

.gcnz6cc5q {
  d: path("M9.5 10 12 7.5l2.5 2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ss0frm8tj {
  d: path("M13.5 4H16a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h2.5");
}
</style><g class="s0phu2bbs"><path class="ss0frm8tj"/><path class="cfd43lbgp"/><path class="gcnz6cc5q"/></g>`,
		"fallback": "iconmind:overage-outline-bold",
	});
}

export default Component;
