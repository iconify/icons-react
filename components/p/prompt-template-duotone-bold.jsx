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
		"content": `<style>.i4enr0m-s {
  fill: currentColor;
  d: path("M7 15.5A2.5 2.5 0 0 1 9.5 13h5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-5A2.5 2.5 0 0 1 7 15.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.r182r524c {
  d: path("M7 9h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wz1gh1b4o {
  d: path("M7 15.5A2.5 2.5 0 0 1 9.5 13h5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-5A2.5 2.5 0 0 1 7 15.5");
}

.z92okmbgh {
  fill: currentColor;
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="z92okmbgh"/><path class="i4enr0m-s"/><path class="jrpnc2pnl"/><path class="r182r524c"/><path class="wz1gh1b4o"/></g>`,
		"fallback": "iconmind:prompt-template-duotone-bold",
	});
}

export default Component;
