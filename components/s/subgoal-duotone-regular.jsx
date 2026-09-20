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
		"content": `<style>.ki3_57bpr {
  d: path("M2 4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p9lsl5b4g {
  fill: currentColor;
  d: path("M13 14a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uxj0p3biq {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.w_lhjwijw {
  d: path("M13 14a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2Z");
}

.wb3vpgbhn {
  d: path("M7 10v5h6");
}
</style><g class="nrj6p8qat"><path class="uxj0p3biq"/><path class="p9lsl5b4g"/><path class="ki3_57bpr"/><path class="wb3vpgbhn"/><path class="w_lhjwijw"/></g>`,
		"fallback": "iconmind:subgoal-duotone-regular",
	});
}

export default Component;
