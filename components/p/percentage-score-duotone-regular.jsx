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
		"content": `<style>.f1etaqbet {
  d: path("M15 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.k74vnib1e {
  d: path("M3 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.svz1b3b2j {
  fill: currentColor;
  d: path("M15 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u363cab-y {
  d: path("M5 19 19 5");
}

.y4l98q7pn {
  fill: currentColor;
  d: path("M3 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="y4l98q7pn"/><path class="svz1b3b2j"/><path class="k74vnib1e"/><path class="f1etaqbet"/><path class="u363cab-y"/></g>`,
		"fallback": "iconmind:percentage-score-duotone-regular",
	});
}

export default Component;
