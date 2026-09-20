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
		"content": `<style>.g_eatebwd {
  d: path("M5 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hf-3i5bym {
  d: path("M15 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jnbv45bnp {
  d: path("M14 14a3 3 0 0 1 6 0");
}

.kx8w1xsla {
  d: path("M4 14a3 3 0 0 1 6 0");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}
</style><g class="hntgybcog"><path class="g_eatebwd"/><path class="kx8w1xsla"/><path class="hf-3i5bym"/><path class="jnbv45bnp"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:team-people-outline-thin",
	});
}

export default Component;
