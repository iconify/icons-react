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
		"content": `<style>.be83lpb1j {
  fill: currentColor;
  d: path("M4 12a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dvoob7u7j {
  d: path("M13.5 9.5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nrlkc9bnf {
  d: path("M4 12a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
}

.rbe8j9b-u {
  d: path("M10.5 9.5v5");
}
</style><g class="hntgybcog"><path class="be83lpb1j"/><path class="nrlkc9bnf"/><path class="rbe8j9b-u"/><path class="dvoob7u7j"/></g>`,
		"fallback": "iconmind:warm-standby-duotone-thin",
	});
}

export default Component;
