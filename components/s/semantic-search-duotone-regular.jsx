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
		"content": `<style>.bdv3-vfcy {
  fill: currentColor;
  d: path("m10 7 3 3 -3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p5o5qo3by {
  d: path("m10 7 3 3 -3 3 -3 -3Z");
}
</style><g class="nrj6p8qat"><path class="bdv3-vfcy"/><path class="kfdmhd64i"/><path class="p5o5qo3by"/><path class="ffw_pwyfz"/></g>`,
		"fallback": "iconmind:semantic-search-duotone-regular",
	});
}

export default Component;
