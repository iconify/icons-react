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

.lu8oixugf {
  d: path("M13 13h6");
}

.rta1163tv {
  d: path("M13 17h6");
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.vm55gtbfg {
  d: path("M4 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="vyks9vbfn"/><path class="rw6ho_bav"/><path class="vm55gtbfg"/><path class="lu8oixugf"/><path class="rta1163tv"/></g>`,
		"fallback": "iconmind:report-card-outline-thin",
	});
}

export default Component;
