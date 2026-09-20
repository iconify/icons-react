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
		"content": `<style>.di9r5tb4w {
  d: path("M9.5 9v6");
}

.m0hvambgh {
  d: path("M16 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.my7z1t_9c {
  d: path("M14.5 9v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pywr_yykw {
  d: path("m4 12 8 -8h8v8l-8 8Z");
}
</style><g class="nrj6p8qat"><path class="pywr_yykw"/><path class="m0hvambgh"/><path class="di9r5tb4w"/><path class="my7z1t_9c"/></g>`,
		"fallback": "iconmind:price-compare-outline-regular",
	});
}

export default Component;
