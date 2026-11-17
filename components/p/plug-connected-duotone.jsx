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
		"content": `<style>.dj5-bebih {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m18 12l-6-6a4.242 4.242 0 1 1 6 6M6 12l6 6a4.242 4.242 0 1 1-6-6");
}

.ft5dv1b6b {
  fill: none;
}

.oekmrl02b {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m6 12l6 6a4.243 4.243 0 0 1-6-6m12 0l-6-6a4.243 4.243 0 0 1 6 6M6 18l-3 3M18 6l3-3M11 17l3-3m-7-1l3-3");
}
</style><g class="ft5dv1b6b"><path class="dj5-bebih"/><path class="oekmrl02b"/></g>`,
		"fallback": "coolicons:plug-connected-duotone",
	});
}

export default Component;
