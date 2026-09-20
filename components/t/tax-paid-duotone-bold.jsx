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
		"content": `<style>.hr4rzpb0a {
  fill: currentColor;
  d: path("M4 12h16v5H4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mha4wfbix {
  d: path("M9 3h6v5H9Z");
}

.pfpu_3ppl {
  d: path("M12 8v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u78lc2bnx {
  d: path("M6 20h12");
}

.vwugbvz1g {
  d: path("M4 12h16v5H4Z");
}

.y_1t5zjea {
  fill: currentColor;
  d: path("M9 3h6v5H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="y_1t5zjea"/><path class="hr4rzpb0a"/><path class="mha4wfbix"/><path class="pfpu_3ppl"/><path class="vwugbvz1g"/><path class="u78lc2bnx"/></g>`,
		"fallback": "iconmind:tax-paid-duotone-bold",
	});
}

export default Component;
