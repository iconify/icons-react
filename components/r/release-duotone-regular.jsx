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
		"content": `<style>.c5icmybsm {
  d: path("m4 12 6 -6h10v12H10Z");
}

.naf5gjb6k {
  d: path("M12 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nwys7tb-b {
  fill: currentColor;
  d: path("m4 12 6 -6h10v12H10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y8h-esezl {
  fill: currentColor;
  d: path("M12 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="nwys7tb-b"/><path class="y8h-esezl"/><path class="c5icmybsm"/><path class="naf5gjb6k"/></g>`,
		"fallback": "iconmind:release-duotone-regular",
	});
}

export default Component;
