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
		"content": `<style>.n48w5yb-p {
  d: path("M14 4h5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.nnp9dj82w {
  d: path("M9 9v11");
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ybts533gz {
  d: path("M15 9v11");
}
</style><g class="s0phu2bbs"><path class="n48w5yb-p"/><path class="rw6ho_bav"/><path class="nnp9dj82w"/><path class="ybts533gz"/></g>`,
		"fallback": "iconmind:table-outline-bold",
	});
}

export default Component;
