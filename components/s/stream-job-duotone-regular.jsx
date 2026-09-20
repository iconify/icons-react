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
		"content": `<style>.ggzo1fbjx {
  d: path("M6 20h6");
}

.gvj63pubw {
  d: path("M18 16h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qlnog1bgn {
  d: path("M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.vd0jm7r_j {
  d: path("M3 16h6");
}

.w6fvlpypf {
  d: path("m9.5 6.5 2 2 -2 2");
}

.xxmghbcrw {
  fill: currentColor;
  d: path("M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zslxt_5nz {
  d: path("M12 16h3");
}
</style><g class="nrj6p8qat"><path class="xxmghbcrw"/><path class="qlnog1bgn"/><path class="w6fvlpypf"/><path class="vd0jm7r_j"/><path class="zslxt_5nz"/><path class="gvj63pubw"/><path class="ggzo1fbjx"/></g>`,
		"fallback": "iconmind:stream-job-duotone-regular",
	});
}

export default Component;
