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
		"content": `<style>.c1e5b9b_i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 7h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f-x5yl3mg {
  d: path("M2 12h11");
}

.fgp9a0qmd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 17h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hd0bezdcu {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hwv-lccbz {
  d: path("M13 7h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.usiycnb-x {
  d: path("M13 7v10");
}

.xyhj-ubbr {
  d: path("M13 17h7");
}

.zw1m3v58r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="hd0bezdcu"/><path class="zw1m3v58r"/><path class="c1e5b9b_i"/><path class="fgp9a0qmd"/><path class="f-x5yl3mg"/><path class="usiycnb-x"/><path class="hwv-lccbz"/><path class="xyhj-ubbr"/></g>`,
		"fallback": "iconmind:parser-duotone-regular",
	});
}

export default Component;
