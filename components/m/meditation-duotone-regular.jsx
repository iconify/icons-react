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
		"content": `<style>.lox4axb5m {
  fill: currentColor;
  d: path("m4 19 8 -8 8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oe3oa5b3b {
  fill: currentColor;
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tai76ebzb {
  d: path("m4 19 8 -8 8 8Z");
}

.uto0n9pso {
  d: path("M7 16h10");
}

.w08657bnd {
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="oe3oa5b3b"/><path class="lox4axb5m"/><path class="w08657bnd"/><path class="tai76ebzb"/><path class="uto0n9pso"/></g>`,
		"fallback": "iconmind:meditation-duotone-regular",
	});
}

export default Component;
