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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hpmnlabtt {
  d: path("M6 9h12");
}

.qyha_vbqa {
  d: path("M12 15c2 2 -2 3 0 6");
}

.t5xz5pb7f {
  d: path("m12 3 6 6 -6 6 -6 -6Z");
}
</style><g class="hntgybcog"><path class="t5xz5pb7f"/><path class="hpmnlabtt"/><path class="qyha_vbqa"/></g>`,
		"fallback": "iconmind:kite-outline-thin",
	});
}

export default Component;
