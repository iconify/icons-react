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
		"content": `<style>.aiuhe2bla {
  d: path("M3.5 15a4.5 4.5 0 0 1 9 0");
}

.hsqhhybiy {
  d: path("M13 13a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t_m3g48-w {
  d: path("M5 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.z87vi03bq {
  d: path("M17 11v9");
}
</style><g class="nrj6p8qat"><path class="t_m3g48-w"/><path class="aiuhe2bla"/><path class="hsqhhybiy"/><path class="z87vi03bq"/></g>`,
		"fallback": "iconmind:pupil-outline-regular",
	});
}

export default Component;
