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

.z3zttqj_r {
  d: path("m10 6 6 6 -6 6");
}
</style><g class="nrj6p8qat"><path class="mzvcb5byi"/><path class="z3zttqj_r"/><path class="a_gwgkc5a"/></g>`,
		"fallback": "iconmind:speculative-decode-outline-regular",
	});
}

export default Component;
