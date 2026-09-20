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
		"content": `<style>.c6uw-ccfl {
  d: path("M7 14h10");
}

.jb50k2vnl {
  fill: currentColor;
  d: path("M13.5 4H16a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s09hy0b0y {
  d: path("M7 11h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ss0frm8tj {
  d: path("M13.5 4H16a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h2.5");
}

.szshe-6ah {
  d: path("M7 17h10");
}
</style><g class="s0phu2bbs"><path class="jb50k2vnl"/><path class="ss0frm8tj"/><path class="s09hy0b0y"/><path class="c6uw-ccfl"/><path class="szshe-6ah"/></g>`,
		"fallback": "iconmind:utilisation-rate-duotone-bold",
	});
}

export default Component;
