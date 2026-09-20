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
		"content": `<style>.h7k_twb0c {
  d: path("M7.27 3.28a3 3 0 1 1 -2.54 0");
}

.hi4ej1pvu {
  d: path("m9.5 11 2 2L15 9.5");
}

.lhz2jzbtp {
  d: path("M19.27 3.28a3 3 0 1 1 -2.54 0");
}

.m_rvj96ky {
  d: path("M13.27 15.28a3 3 0 1 1 -2.54 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="h7k_twb0c"/><path class="lhz2jzbtp"/><path class="m_rvj96ky"/><path class="hi4ej1pvu"/></g>`,
		"fallback": "iconmind:vote-quorum-outline-regular",
	});
}

export default Component;
