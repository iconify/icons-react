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
		"content": `<style>.hpthd_boc {
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x1lhcv7ou {
  d: path("m7 14 3 3 3 -3 3 3");
}

.xs9ieg6qb {
  d: path("m7 9 3 3 3 -3 3 3");
}
</style><g class="nrj6p8qat"><path class="hpthd_boc"/><path class="xs9ieg6qb"/><path class="x1lhcv7ou"/></g>`,
		"fallback": "iconmind:skin-outline-regular",
	});
}

export default Component;
