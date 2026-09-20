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
		"content": `<style>.er9-5mbzg {
  fill: currentColor;
  d: path("M3 9a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.njs8q8bsp {
  d: path("M3 9a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zl61012kd {
  d: path("M18.5 9.5 21 12l-2.5 2.5");
}

.zy54a7bml {
  d: path("M17 12h4");
}
</style><g class="nrj6p8qat"><path class="er9-5mbzg"/><path class="njs8q8bsp"/><path class="zy54a7bml"/><path class="zl61012kd"/></g>`,
		"fallback": "iconmind:swipe-action-duotone-regular",
	});
}

export default Component;
