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
		"content": `<style>.a_gwgkc5a {
  d: path("m16 17 2 2 4 -4");
}

.knx6k6m0f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 17 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.li2wj2b1p {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 6 6 6 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mql-qobjv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 6 6 6 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mzvcb5byi {
  d: path("m3 6 6 6 -6 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z3zttqj_r {
  d: path("m10 6 6 6 -6 6");
}
</style><g class="s0phu2bbs"><path class="mql-qobjv"/><path class="li2wj2b1p"/><path class="knx6k6m0f"/><path class="mzvcb5byi"/><path class="z3zttqj_r"/><path class="a_gwgkc5a"/></g>`,
		"fallback": "iconmind:speculative-decode-duotone-bold",
	});
}

export default Component;
