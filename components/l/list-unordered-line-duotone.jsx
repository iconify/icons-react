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
		"content": `<style>.akly-1bxp {
  d: path("M5 6H5.0001");
}

.bghcxgbay {
  d: path("M10 14H21");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.f1vdtsbwm {
  d: path("M5 14H5.0001");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n3rmrwb_j {
  d: path("M10 6H21");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.opynpe6ct {
  d: path("M10 10H21");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ri86mbblw {
  d: path("M10 18H21");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.u85h8qb3e {
  d: path("M5 18H5.0001");
}

.vr5gl3zbo {
  d: path("M5 10H5.0001");
}
</style><g class="hntgybcog"><path class="n3rmrwb_j"/><path class="opynpe6ct"/><path class="bghcxgbay"/><path class="ri86mbblw"/><path class="akly-1bxp"/><path class="vr5gl3zbo"/><path class="f1vdtsbwm"/><path class="u85h8qb3e"/></g>`,
		"fallback": "solar:list-unordered-line-duotone",
	});
}

export default Component;
