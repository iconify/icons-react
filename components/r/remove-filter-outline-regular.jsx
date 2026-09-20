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
		"content": `<style>.mjze8rg7o {
  d: path("M9 2.5H3l7 7V12h4V9.5l7 -7h-6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x3sflacnk {
  d: path("M9 18h6");
}
</style><g class="nrj6p8qat"><path class="mjze8rg7o"/><path class="x3sflacnk"/></g>`,
		"fallback": "iconmind:remove-filter-outline-regular",
	});
}

export default Component;
