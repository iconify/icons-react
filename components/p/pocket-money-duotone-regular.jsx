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
		"content": `<style>.acja6ya7a {
  fill: currentColor;
  d: path("M9 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.c30ujnbdh {
  d: path("M4 3v11a8 8 0 0 0 16 0V3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.se4mxf8ip {
  fill: currentColor;
  d: path("M4 3v11a8 8 0 0 0 16 0V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.v0y09obth {
  d: path("M12 12v4");
}

.vn6-di86m {
  d: path("M4 7h16");
}

.zoz5ar7wf {
  d: path("M9 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="se4mxf8ip"/><path class="acja6ya7a"/><path class="c30ujnbdh"/><path class="vn6-di86m"/><path class="zoz5ar7wf"/><path class="v0y09obth"/></g>`,
		"fallback": "iconmind:pocket-money-duotone-regular",
	});
}

export default Component;
