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
		"content": `<style>.i37wtfbmi {
  d: path("M7.5 10h9v6h-9Z");
}

.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.k5avrj3uw {
  fill: currentColor;
  d: path("M7.5 10h9v6h-9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n1c_-nuwx {
  d: path("m7.5 10 4.5 4.5 4.5 -4.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z92okmbgh {
  fill: currentColor;
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="z92okmbgh"/><path class="k5avrj3uw"/><path class="jrpnc2pnl"/><path class="i37wtfbmi"/><path class="n1c_-nuwx"/></g>`,
		"fallback": "iconmind:newsletter-signup-duotone-bold",
	});
}

export default Component;
