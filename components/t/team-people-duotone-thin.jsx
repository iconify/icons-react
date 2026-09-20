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
		"content": `<style>.bt_2bvgpa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c9h3x0bhp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 14a3 3 0 0 1 6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g_eatebwd {
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

.jpz_xcbiq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 14a3 3 0 0 1 6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kx8w1xsla {
  d: path("M4 14a3 3 0 0 1 6 0");
}

.o0u5m7z1w {
  fill: currentColor;
  d: path("M5 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.y-n_bmb1w {
  fill: currentColor;
  d: path("M15 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="o0u5m7z1w"/><path class="y-n_bmb1w"/><path class="jpz_xcbiq"/><path class="c9h3x0bhp"/><path class="bt_2bvgpa"/><path class="g_eatebwd"/><path class="kx8w1xsla"/><path class="hf-3i5bym"/><path class="jnbv45bnp"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:team-people-duotone-thin",
	});
}

export default Component;
