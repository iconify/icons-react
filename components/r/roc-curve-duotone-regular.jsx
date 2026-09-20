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
		"content": `<style>.bd3-a5q0s {
  d: path("M6 18 18 6");
}

.gb7yzvvzz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hj1fiqb-o {
  d: path("M6 18v-6l6 -6h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q1h6kybti {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 18 18 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.szk-jdbiz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 18v-6l6 -6h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="gb7yzvvzz"/><path class="szk-jdbiz"/><path class="q1h6kybti"/><path class="qe97cg-lx"/><path class="hj1fiqb-o"/><path class="bd3-a5q0s"/></g>`,
		"fallback": "iconmind:roc-curve-duotone-regular",
	});
}

export default Component;
