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
		"content": `<style>.brpj2xbjm {
  d: path("M4 5v14l7 -7Z");
}

.bskrurb1h {
  d: path("M18 7v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s8vehckhm {
  d: path("M17 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="brpj2xbjm"/><path class="bskrurb1h"/><path class="s8vehckhm"/></g>`,
		"fallback": "iconmind:run-alert-outline-regular",
	});
}

export default Component;
