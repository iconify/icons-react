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
		"content": `<style>.jippdzaqj {
  d: path("M8.5 14.5v-5h7v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p7ecc1bwl {
  d: path("m13 12 2.5 2.5L18 12");
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}
</style><g class="nrj6p8qat"><path class="ugdbidcqi"/><path class="jippdzaqj"/><path class="p7ecc1bwl"/></g>`,
		"fallback": "iconmind:restore-state-outline-regular",
	});
}

export default Component;
