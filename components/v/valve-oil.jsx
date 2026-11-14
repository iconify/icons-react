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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kgpmh5bmr {
  d: path("M11.879 10h.242a1.5 1.5 0 0 0 1.463-1.832l-.668-2.937A.94.94 0 0 0 12 4.5a.94.94 0 0 0-.916.731l-.668 2.937A1.5 1.5 0 0 0 11.879 10M12 4.5v-2m-2.5 13h5");
}

.ri04qubdn {
  d: path("M10.5 10h3a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 7 18v-4.5a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="ri04qubdn"/><path class="kgpmh5bmr"/></g>`,
		"fallback": "uix:valve-oil",
	});
}

export default Component;
