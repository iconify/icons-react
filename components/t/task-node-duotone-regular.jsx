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
		"content": `<style>.bkx4zkndj {
  d: path("M6 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.e0fatccfd {
  d: path("M18 12h4");
}

.h4br4z40f {
  d: path("M2 12h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zcaoz3bhd {
  fill: currentColor;
  d: path("M6 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zcaoz3bhd"/><path class="bkx4zkndj"/><path class="h4br4z40f"/><path class="e0fatccfd"/></g>`,
		"fallback": "iconmind:task-node-duotone-regular",
	});
}

export default Component;
