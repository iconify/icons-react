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
		"content": `<style>.lcar0lbrw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 9 3 -3 3 3 3 -3 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tbe304aqf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 16h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tee5ti87r {
  d: path("m3 9 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="nrj6p8qat"><path class="lcar0lbrw"/><path class="tbe304aqf"/><path class="tee5ti87r"/><path class="ys-dg812g"/></g>`,
		"fallback": "iconmind:overfit-duotone-regular",
	});
}

export default Component;
