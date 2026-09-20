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
		"content": `<style>.cacmi2bmi {
  d: path("M13 3H9L6 6v15h12V8");
}

.eqk2m_q5d {
  d: path("M9 15h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i9yv2ebba {
  fill: currentColor;
  d: path("M14 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pt-3kkb2k {
  d: path("M9 11h6");
}

.pux-8e3tz {
  fill: currentColor;
  d: path("M13 3H9L6 6v15h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vzyxlnb8e {
  d: path("M14 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="pux-8e3tz"/><path class="i9yv2ebba"/><path class="cacmi2bmi"/><path class="pt-3kkb2k"/><path class="eqk2m_q5d"/><path class="vzyxlnb8e"/></g>`,
		"fallback": "iconmind:mcp-manifest-duotone-thin",
	});
}

export default Component;
