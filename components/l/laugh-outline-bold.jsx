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
		"content": `<style>.rdx5t34om {
  d: path("M16 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uk0rveqaj {
  d: path("M4 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.z2scgmbfa {
  d: path("M4 12h16a8 8 0 0 1 -16 0");
}
</style><g class="s0phu2bbs"><path class="uk0rveqaj"/><path class="rdx5t34om"/><path class="z2scgmbfa"/></g>`,
		"fallback": "iconmind:laugh-outline-bold",
	});
}

export default Component;
