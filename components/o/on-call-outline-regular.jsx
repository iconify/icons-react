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
		"content": `<style>.hl-uapbht {
  d: path("M15 5a3 3 0 0 1 0 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p5dc1z72h {
  d: path("M15 2a6 6 0 0 1 0 12");
}

.qaw_x5ree {
  d: path("M5 17h4");
}

.rzbw9hbaj {
  d: path("M2 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="rzbw9hbaj"/><path class="qaw_x5ree"/><path class="hl-uapbht"/><path class="p5dc1z72h"/></g>`,
		"fallback": "iconmind:on-call-outline-regular",
	});
}

export default Component;
