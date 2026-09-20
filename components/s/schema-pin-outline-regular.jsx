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
		"content": `<style>.ah8uvpf1o {
  d: path("M3 10h13");
}

.e6q34etyy {
  d: path("M16 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.g22ksobnl {
  d: path("M19 14v4");
}

.hk-jkdb0v {
  d: path("M3 8a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hk-jkdb0v"/><path class="ah8uvpf1o"/><path class="e6q34etyy"/><path class="g22ksobnl"/></g>`,
		"fallback": "iconmind:schema-pin-outline-regular",
	});
}

export default Component;
