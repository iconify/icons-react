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
		"content": `<style>.c-pcdbceg {
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
}

.dn5wogbzl {
  d: path("M7.5 17.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.olx0yluil {
  d: path("M12.5 20.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.qxclf1btn {
  d: path("m8 21 6 -6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="c-pcdbceg"/><path class="dn5wogbzl"/><path class="qxclf1btn"/><path class="olx0yluil"/></g>`,
		"fallback": "iconmind:rain-chance-outline-bold",
	});
}

export default Component;
