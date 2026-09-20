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
		"content": `<style>.bivf6i36y {
  d: path("m5 13 3 3 5 -5");
}

.l5f794mkz {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.ux4y69xbk {
  d: path("M12 16h8");
}
</style><g class="nrj6p8qat"><path class="l5f794mkz"/><path class="rw6ho_bav"/><path class="bivf6i36y"/><path class="ux4y69xbk"/></g>`,
		"fallback": "iconmind:vaccination-record-outline-regular",
	});
}

export default Component;
