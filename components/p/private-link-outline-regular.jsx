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
		"content": `<style>.e7pgrp-wx {
  d: path("M2 12h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p8a31xr4o {
  d: path("M16 12h6");
}

.zcbyubc5i {
  d: path("M9.5 8.5a2.5 2.5 0 0 1 5 0");
}

.zmj1nccll {
  d: path("M8.5 10.5a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="e7pgrp-wx"/><path class="zmj1nccll"/><path class="zcbyubc5i"/><path class="p8a31xr4o"/></g>`,
		"fallback": "iconmind:private-link-outline-regular",
	});
}

export default Component;
