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
		"content": `<style>.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.ots31sbwo {
  fill: currentColor;
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wiqtzw0bm {
  d: path("M10 7h4v6l-2 -2 -2 2Z");
}

.ym5d7gb-s {
  fill: currentColor;
  d: path("M10 7h4v6l-2 -2 -2 2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="ots31sbwo"/><path class="ym5d7gb-s"/><path class="jd_dotbnq"/><path class="wiqtzw0bm"/></g>`,
		"fallback": "iconmind:receipt-store-duotone-bold",
	});
}

export default Component;
