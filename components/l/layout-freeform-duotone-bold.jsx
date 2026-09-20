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
		"content": `<style>.fq73mqktw {
  fill: currentColor;
  d: path("M5 7h5v4H5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n-9hyjbad {
  fill: currentColor;
  d: path("M14 4h5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n48w5yb-p {
  d: path("M14 4h5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.ozpvp56wj {
  d: path("M5 7h5v4H5Z");
}

.r9qdlbc3q {
  d: path("M5 14h5v3H5Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ul-9_9coq {
  fill: currentColor;
  d: path("M5 14h5v3H5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wx1vscicl {
  d: path("M13 7h6v10h-6Z");
}

.yntmwcbwv {
  fill: currentColor;
  d: path("M13 7h6v10h-6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="n-9hyjbad"/><path class="fq73mqktw"/><path class="yntmwcbwv"/><path class="ul-9_9coq"/><path class="n48w5yb-p"/><path class="ozpvp56wj"/><path class="wx1vscicl"/><path class="r9qdlbc3q"/></g>`,
		"fallback": "iconmind:layout-freeform-duotone-bold",
	});
}

export default Component;
