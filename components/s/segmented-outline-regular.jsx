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
		"content": `<style>.jlpxneb5g {
  d: path("M9 8v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oh4p-ccfe {
  d: path("M2 10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.okg0-qwlz {
  d: path("M4.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.pqrd0wbvk {
  d: path("M15 8v8");
}
</style><g class="nrj6p8qat"><path class="oh4p-ccfe"/><path class="jlpxneb5g"/><path class="pqrd0wbvk"/><path class="okg0-qwlz"/></g>`,
		"fallback": "iconmind:segmented-outline-regular",
	});
}

export default Component;
