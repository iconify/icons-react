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
		"content": `<style>.m53a-8v-w {
  d: path("m8 8 8 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.x_t04xb2n {
  d: path("m16 8 -8 8");
}
</style><g class="nrj6p8qat"><path class="okud9xj_d"/><path class="m53a-8v-w"/><path class="x_t04xb2n"/></g>`,
		"fallback": "iconmind:quiz-fail-outline-regular",
	});
}

export default Component;
