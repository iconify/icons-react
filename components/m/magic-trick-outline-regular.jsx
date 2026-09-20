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
		"content": `<style>.kex2cdcje {
  d: path("M18 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oq9ztqbxu {
  d: path("M11 4a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.p0leisbvy {
  d: path("M7 18V9h10v9");
}

.r7dhdp-mq {
  d: path("M4 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="nrj6p8qat"><path class="p0leisbvy"/><path class="xyj-l9cjp"/><path class="kex2cdcje"/><path class="r7dhdp-mq"/><path class="oq9ztqbxu"/></g>`,
		"fallback": "iconmind:magic-trick-outline-regular",
	});
}

export default Component;
