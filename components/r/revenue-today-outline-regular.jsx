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
		"content": `<style>.bx3fv3b8c {
  d: path("M12 13v4");
}

.d27-dpb3f {
  d: path("M9 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.iy612dbwv {
  d: path("M18 4v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t7ig_mg-l {
  d: path("M2 10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.v9wjrcboq {
  d: path("M4 8V3h10v5");
}
</style><g class="nrj6p8qat"><path class="t7ig_mg-l"/><path class="v9wjrcboq"/><path class="iy612dbwv"/><path class="d27-dpb3f"/><path class="bx3fv3b8c"/></g>`,
		"fallback": "iconmind:revenue-today-outline-regular",
	});
}

export default Component;
