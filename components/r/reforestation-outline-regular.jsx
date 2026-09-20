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
		"content": `<style>.dp176pbdt {
  d: path("M7 13v6");
}

.hv2175vjd {
  d: path("M17 16v3");
}

.i5be34b7d {
  d: path("M13 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pj9q08bqv {
  d: path("M3 9a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="pj9q08bqv"/><path class="dp176pbdt"/><path class="i5be34b7d"/><path class="hv2175vjd"/><path class="z9ittvbis"/></g>`,
		"fallback": "iconmind:reforestation-outline-regular",
	});
}

export default Component;
