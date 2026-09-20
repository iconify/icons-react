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
		"content": `<style>.ab69i60qd {
  d: path("M5.5 4H3v16h2.5");
}

.gorvssbqo {
  d: path("M17.5 9.5 20 12l-2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ixy085bpz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17.5 9.5 20 12l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kn2e0_xvy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5.5 4H3v16h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lgk47ib7d {
  d: path("M14.5 12h3");
}

.ly2b2eaue {
  d: path("M8.5 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ozusmjceo {
  fill: currentColor;
  d: path("M8.5 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.prxsb9x2h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14.5 12h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q4hnnr4zu {
  d: path("M8.5 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.wimmg3bgi {
  fill: currentColor;
  d: path("M8.5 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="ozusmjceo"/><path class="wimmg3bgi"/><path class="kn2e0_xvy"/><path class="prxsb9x2h"/><path class="ixy085bpz"/><path class="ab69i60qd"/><path class="q4hnnr4zu"/><path class="ly2b2eaue"/><path class="lgk47ib7d"/><path class="gorvssbqo"/></g>`,
		"fallback": "iconmind:kv-evict-duotone-thin",
	});
}

export default Component;
