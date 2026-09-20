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
		"content": `<style>.fco1n9k6o {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 17h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h50arts9k {
  d: path("M6 12h10");
}

.in7p4lbub {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 7h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iwtx-zb1w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
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
</style><g class="nrj6p8qat"><path class="in7p4lbub"/><path class="iwtx-zb1w"/><path class="fco1n9k6o"/><path class="p7nia1b6j"/><path class="h50arts9k"/><path class="x3jqftbaj"/></g>`,
		"fallback": "iconmind:span-trace-duotone-regular",
	});
}

export default Component;
