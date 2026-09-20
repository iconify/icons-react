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
		"content": `<style>.h50arts9k {
  d: path("M6 12h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p7nia1b6j {
  d: path("M3 7h16");
}

.x3jqftbaj {
  d: path("M9 17h12");
}
</style><g class="nrj6p8qat"><path class="p7nia1b6j"/><path class="h50arts9k"/><path class="x3jqftbaj"/></g>`,
		"fallback": "iconmind:span-trace-outline-regular",
	});
}

export default Component;
