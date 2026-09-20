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
		"content": `<style>.eyx95fmam {
  d: path("M4 16a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 7a5.5 5.5 0 0 1 4.5 9Z");
}

.h1s_avbod {
  d: path("M17 19v3");
}

.jk87mm2cv {
  d: path("M7 19v3");
}

.lr02_ebwb {
  d: path("M12 19v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="eyx95fmam"/><path class="jk87mm2cv"/><path class="lr02_ebwb"/><path class="h1s_avbod"/></g>`,
		"fallback": "iconmind:weather-hourly-outline-regular",
	});
}

export default Component;
