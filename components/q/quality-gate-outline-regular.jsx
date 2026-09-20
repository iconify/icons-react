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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.f3r6jjb4a {
  d: path("M20 3v18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q_47v4dkd {
  d: path("m8 12 3 3 6 -6");
}
</style><g class="nrj6p8qat"><path class="crv4i00bu"/><path class="f3r6jjb4a"/><path class="q_47v4dkd"/></g>`,
		"fallback": "iconmind:quality-gate-outline-regular",
	});
}

export default Component;
