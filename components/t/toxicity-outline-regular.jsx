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
		"content": `<style>.d46lplb8g {
  d: path("M7 16v5l5 -5");
}

.hol5d7bwd {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nmuh1-bte {
  d: path("m9 7 6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.spa1l0bcs {
  d: path("m15 7 -6 6");
}
</style><g class="nrj6p8qat"><path class="hol5d7bwd"/><path class="d46lplb8g"/><path class="nmuh1-bte"/><path class="spa1l0bcs"/></g>`,
		"fallback": "iconmind:toxicity-outline-regular",
	});
}

export default Component;
