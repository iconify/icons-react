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
		"content": `<style>.m_-1pbc9n {
  d: path("M22 3h-4v5h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pdx7buv0t {
  d: path("M6 21v-4c-2 -2 -3 -5 -3 -8a7 7 0 0 1 14 -1c0 2 2 3 2 4s-1 1 -2 1v3a2 2 0 0 1 -2 2h-3v3");
}

.srcd877rx {
  d: path("M18 5.5h-3");
}
</style><g class="nrj6p8qat"><path class="pdx7buv0t"/><path class="m_-1pbc9n"/><path class="srcd877rx"/></g>`,
		"fallback": "iconmind:temperature-check-outline-regular",
	});
}

export default Component;
