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
		"content": `<style>.mha4wfbix {
  d: path("M9 3h6v5H9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pfpu_3ppl {
  d: path("M12 8v4");
}

.u78lc2bnx {
  d: path("M6 20h12");
}

.vwugbvz1g {
  d: path("M4 12h16v5H4Z");
}
</style><g class="nrj6p8qat"><path class="mha4wfbix"/><path class="pfpu_3ppl"/><path class="vwugbvz1g"/><path class="u78lc2bnx"/></g>`,
		"fallback": "iconmind:tax-paid-outline-regular",
	});
}

export default Component;
