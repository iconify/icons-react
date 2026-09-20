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
		"content": `<style>.hg1j_lbce {
  d: path("M7 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.il4f-53br {
  d: path("M15 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mf-afdped {
  d: path("M15 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.uv-0dacjj {
  d: path("M7 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zrwkhybyf {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="zrwkhybyf"/><path class="hg1j_lbce"/><path class="il4f-53br"/><path class="uv-0dacjj"/><path class="mf-afdped"/></g>`,
		"fallback": "iconmind:vocabulary-outline-thin",
	});
}

export default Component;
