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
		"content": `<style>.b15_tib7k {
  d: path("M17.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.gfdpeof0d {
  d: path("M9 7v10");
}

.murw5tb-p {
  d: path("M2 9a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okg0-qwlz {
  d: path("M4.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.y_uork5-p {
  d: path("M15 7v10");
}
</style><g class="nrj6p8qat"><path class="murw5tb-p"/><path class="gfdpeof0d"/><path class="y_uork5-p"/><path class="okg0-qwlz"/><path class="n3p0zmbop"/><path class="b15_tib7k"/></g>`,
		"fallback": "iconmind:watercolour-outline-regular",
	});
}

export default Component;
