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
		"content": `<style>.h9lgw0bhg {
  d: path("m12 7 3 -3 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vgyler10s {
  d: path("M2 13a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.yz_nd208h {
  d: path("M15 4v7");
}
</style><g class="nrj6p8qat"><path class="vgyler10s"/><path class="yz_nd208h"/><path class="h9lgw0bhg"/></g>`,
		"fallback": "iconmind:pass-mark-outline-regular",
	});
}

export default Component;
