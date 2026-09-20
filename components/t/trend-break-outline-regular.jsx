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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oatlkcbwl {
  d: path("m3 15 8 -8");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.uj_hf0zyk {
  d: path("m13 9 6 6");
}
</style><g class="nrj6p8qat"><path class="oatlkcbwl"/><path class="uj_hf0zyk"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:trend-break-outline-regular",
	});
}

export default Component;
