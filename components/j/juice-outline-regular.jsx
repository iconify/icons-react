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
		"content": `<style>.l2k0-c9-j {
  d: path("m6 8 5 -5 5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rh6cspb3h {
  d: path("M6 8v13h10V8Z");
}

.xj_kqitvx {
  d: path("m13 8 5 -5");
}
</style><g class="nrj6p8qat"><path class="rh6cspb3h"/><path class="l2k0-c9-j"/><path class="xj_kqitvx"/></g>`,
		"fallback": "iconmind:juice-outline-regular",
	});
}

export default Component;
