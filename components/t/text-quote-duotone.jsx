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
		"content": `<style>.ljyyucbks {
  d: path("M3 12V19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p3f9wkane {
  stroke-opacity: 0.4;
  d: path("M3 5H16M7 12H21M7 19H21");
}
</style><g class="nrj6p8qat"><path class="p3f9wkane"/><path class="ljyyucbks"/></g>`,
		"fallback": "keyline-icons:text-quote-duotone",
	});
}

export default Component;
