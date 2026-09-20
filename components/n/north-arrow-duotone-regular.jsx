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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rctx16bxc {
  d: path("m12 2 10 10 -10 10L2 12Z");
}

.x26a8iq1c {
  d: path("M2 12h20");
}

.x9-zrtbtb {
  fill: currentColor;
  d: path("m12 2 10 10 -10 10L2 12Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="x9-zrtbtb"/><path class="rctx16bxc"/><path class="x26a8iq1c"/></g>`,
		"fallback": "iconmind:north-arrow-duotone-regular",
	});
}

export default Component;
