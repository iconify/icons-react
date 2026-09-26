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
		"content": `<style>.jl1_ebcra {
  fill: currentColor;
  d: path("M10 2C14.4184 2 18 5.5816 18 10C18 14.4184 14.4184 18 10 18C5.5816 18 2 14.4184 2 10C2 5.5816 5.5816 2 10 2Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xexl16bfr {
  d: path("M15 15L21 21");
}
</style><g class="nrj6p8qat"><path class="jl1_ebcra"/><path class="xexl16bfr"/></g>`,
		"fallback": "keyline-icons:search-fill",
	});
}

export default Component;
