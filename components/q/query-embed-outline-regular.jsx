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
		"content": `<style>.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tr3i0d91k {
  d: path("M11.5 10H14v2.5");
}

.u70k4y_qc {
  d: path("m9 15 5 -5");
}
</style><g class="nrj6p8qat"><path class="b5ic9acln"/><path class="u70k4y_qc"/><path class="tr3i0d91k"/></g>`,
		"fallback": "iconmind:query-embed-outline-regular",
	});
}

export default Component;
