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
		"content": `<style>.c3rn_7bqc {
  d: path("M2 9a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hijsj72qe {
  d: path("M6 10v5");
}

.khg27_bvg {
  d: path("M18 10v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v6j2lm37i {
  d: path("M9 12.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="c3rn_7bqc"/><path class="v6j2lm37i"/><path class="hijsj72qe"/><path class="khg27_bvg"/></g>`,
		"fallback": "iconmind:tuition-outline-regular",
	});
}

export default Component;
