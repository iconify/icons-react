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
		"content": `<style>.c__qe1vzx {
  fill: currentColor;
  d: path("M17.5 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jifmu5b_n {
  fill: currentColor;
  d: path("M2 19a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p2apttb3i {
  d: path("M17.5 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.qh7t7707e {
  d: path("m9 16.5 7 -7");
}

.r_2fvubda {
  d: path("M2 19a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
}
</style><g class="nrj6p8qat"><path class="jifmu5b_n"/><path class="c__qe1vzx"/><path class="r_2fvubda"/><path class="qh7t7707e"/><path class="p2apttb3i"/></g>`,
		"fallback": "iconmind:laser-pointer-duotone-regular",
	});
}

export default Component;
