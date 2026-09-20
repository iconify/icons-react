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
		"content": `<style>.elmoo_bpw {
  d: path("M15 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hiqcqfbaf {
  d: path("M12 8v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.qye2ovraz {
  d: path("M7 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="jrpnc2pnl"/><path class="hiqcqfbaf"/><path class="qye2ovraz"/><path class="elmoo_bpw"/></g>`,
		"fallback": "iconmind:visual-diff-outline-thin",
	});
}

export default Component;
