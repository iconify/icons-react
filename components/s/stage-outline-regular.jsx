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
		"content": `<style>.e0fatccfd {
  d: path("M18 12h4");
}

.h4br4z40f {
  d: path("M2 12h4");
}

.meu59i09i {
  d: path("M6 9a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
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
</style><g class="nrj6p8qat"><path class="h4br4z40f"/><path class="meu59i09i"/><path class="e0fatccfd"/><path class="n3p0zmbop"/></g>`,
		"fallback": "iconmind:stage-outline-regular",
	});
}

export default Component;
