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
		"content": `<style>.aq5i5tblx {
  d: path("M4 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.b_tmi-s2v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m13.5 9.5 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fhumgwb1z {
  d: path("m10.5 9.5 -3 3");
}

.fozhwebbv {
  d: path("M10 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fti-unbge {
  fill: currentColor;
  d: path("M4 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ko65glbqt {
  d: path("m13.5 9.5 3 3");
}

.mmyj8y0oh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 8v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p83l94bht {
  d: path("M16 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ry7zsib4b {
  fill: currentColor;
  d: path("M16 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s_vo3wz-j {
  fill: currentColor;
  d: path("M10 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.uzmclv6tb {
  d: path("M12 8v3");
}

.wdgq_7-jt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10.5 9.5 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="s_vo3wz-j"/><path class="fti-unbge"/><path class="ry7zsib4b"/><path class="mmyj8y0oh"/><path class="wdgq_7-jt"/><path class="b_tmi-s2v"/><path class="fozhwebbv"/><path class="aq5i5tblx"/><path class="p83l94bht"/><path class="uzmclv6tb"/><path class="fhumgwb1z"/><path class="ko65glbqt"/></g>`,
		"fallback": "iconmind:node-cluster-duotone-bold",
	});
}

export default Component;
