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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p304tdbta {
  d: path("M21 5h-5a3 3 0 0 0-3 3v11m0-7h6");
}

.te3ifc1by {
  stroke-opacity: 0.4;
  d: path("M3 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><g class="nrj6p8qat"><path class="te3ifc1by"/><path class="p304tdbta"/></g>`,
		"fallback": "coolicons:temperature-fahrenheit-duocolor-sharp",
	});
}

export default Component;
