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
		"content": `<style>.dkyw6nb7m {
  d: path("M7 16h7");
}

.mifi8nb9f {
  d: path("M3 10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uxyzhxvwz {
  d: path("M7 12h10");
}

.y__nh_wml {
  d: path("M9.5 8 12 5.5 14.5 8");
}
</style><g class="nrj6p8qat"><path class="mifi8nb9f"/><path class="y__nh_wml"/><path class="uxyzhxvwz"/><path class="dkyw6nb7m"/></g>`,
		"fallback": "iconmind:popover-outline-regular",
	});
}

export default Component;
