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
		"content": `<style>.b-73d8bgy {
  d: path("M16 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.k-jt90-vx {
  d: path("M11 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u1mon9cdo {
  d: path("M3 15h9");
}

.x50q_4bdr {
  d: path("M3 10h18");
}

.ze9yihd5h {
  d: path("M6 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="k6nj2fbya"/><path class="x50q_4bdr"/><path class="u1mon9cdo"/><path class="ze9yihd5h"/><path class="k-jt90-vx"/><path class="b-73d8bgy"/></g>`,
		"fallback": "iconmind:partial-answer-outline-regular",
	});
}

export default Component;
