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
		"content": `<style>.c6ge0ib5p {
  d: path("M15 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.h_ahrlbwq {
  d: path("M2 10a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ywd80sbef {
  d: path("M5 13.5 7.5 11l2.5 2.5 2.5 -2.5");
}
</style><g class="nrj6p8qat"><path class="h_ahrlbwq"/><path class="c6ge0ib5p"/><path class="ywd80sbef"/></g>`,
		"fallback": "iconmind:ticker-outline-regular",
	});
}

export default Component;
