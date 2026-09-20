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
		"content": `<style>.btgfappwg {
  d: path("M7 6h14");
}

.f8arnkt8y {
  d: path("M7 18h6");
}

.i-zd2i_hi {
  d: path("M3 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ia46_gbxj {
  d: path("M3 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rz_vrfdnw {
  d: path("M3 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.uxyzhxvwz {
  d: path("M7 12h10");
}
</style><g class="nrj6p8qat"><path class="ia46_gbxj"/><path class="btgfappwg"/><path class="i-zd2i_hi"/><path class="uxyzhxvwz"/><path class="rz_vrfdnw"/><path class="f8arnkt8y"/></g>`,
		"fallback": "iconmind:ranking-outline-regular",
	});
}

export default Component;
