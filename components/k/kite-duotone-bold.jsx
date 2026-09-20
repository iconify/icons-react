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
		"content": `<style>.h090oacoe {
  fill: currentColor;
  d: path("m12 3 6 6 -6 6 -6 -6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hpmnlabtt {
  d: path("M6 9h12");
}

.qyha_vbqa {
  d: path("M12 15c2 2 -2 3 0 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t5xz5pb7f {
  d: path("m12 3 6 6 -6 6 -6 -6Z");
}
</style><g class="s0phu2bbs"><path class="h090oacoe"/><path class="t5xz5pb7f"/><path class="hpmnlabtt"/><path class="qyha_vbqa"/></g>`,
		"fallback": "iconmind:kite-duotone-bold",
	});
}

export default Component;
