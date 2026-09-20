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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.c4o3x9bhp {
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.cn1mb64lb {
  d: path("M11 13h4");
}

.ib2ejzoki {
  fill: currentColor;
  d: path("M8 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jlgxzd_ny {
  fill: currentColor;
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t7gelxb9v {
  d: path("M11 9h4");
}

.tcg96lbqc {
  d: path("m10 16 2 2 -2 2");
}

.teamv5bhf {
  d: path("M8 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="yxow7abeb"/><path class="jlgxzd_ny"/><path class="ib2ejzoki"/><path class="abnm6smsv"/><path class="c4o3x9bhp"/><path class="t7gelxb9v"/><path class="teamv5bhf"/><path class="cn1mb64lb"/><path class="tcg96lbqc"/></g>`,
		"fallback": "iconmind:runbook-duotone-bold",
	});
}

export default Component;
