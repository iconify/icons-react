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
		"content": `<style>.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.i7dhasbwa {
  d: path("m12.5 16 2.5 2.5 2.5 -2.5");
}

.irxudvbid {
  d: path("M9 18.5v-5h6v5");
}

.l-z02yb4d {
  d: path("M11 5v5l2.5 -2.5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="d5czi6rdr"/><path class="l-z02yb4d"/><path class="irxudvbid"/><path class="i7dhasbwa"/></g>`,
		"fallback": "iconmind:test-retry-outline-regular",
	});
}

export default Component;
