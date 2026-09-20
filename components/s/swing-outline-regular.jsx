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
		"content": `<style>.dihddo_by {
  d: path("M6 18h12");
}

.e99hiubds {
  d: path("M5 3h14");
}

.h3aib2b4u {
  d: path("M8 3v15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qsabb4b5g {
  d: path("M16 3v15");
}
</style><g class="nrj6p8qat"><path class="e99hiubds"/><path class="h3aib2b4u"/><path class="qsabb4b5g"/><path class="dihddo_by"/></g>`,
		"fallback": "iconmind:swing-outline-regular",
	});
}

export default Component;
