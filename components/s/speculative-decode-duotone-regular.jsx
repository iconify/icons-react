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

.anht8yrfs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 17 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m-y9eybel {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 6 6 6 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mzvcb5byi {
  d: path("m3 6 6 6 -6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t-eeuqb9w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 6 6 6 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z3zttqj_r {
  d: path("m10 6 6 6 -6 6");
}
</style><g class="nrj6p8qat"><path class="t-eeuqb9w"/><path class="m-y9eybel"/><path class="anht8yrfs"/><path class="mzvcb5byi"/><path class="z3zttqj_r"/><path class="a_gwgkc5a"/></g>`,
		"fallback": "iconmind:speculative-decode-duotone-regular",
	});
}

export default Component;
