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

.pgb99obzj {
  d: path("M19.8284 5C19.4046 3.8014 18.2713 3 17 3L5 3C3.3431 3 2 4.3431 2 6L2 18C2 19.6569 3.3431 21 5 21L17 21C18.2713 21 19.4046 20.1986 19.8284 19M11 3L11 21M16 12H22M19 9L22 12L19 15");
}

.z1h9cqbow {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11 3L5 3C3.3431 3 2 4.3431 2 6L2 18C2 19.6569 3.3431 21 5 21L11 21Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="z1h9cqbow"/><path class="pgb99obzj"/></g>`,
		"fallback": "keyline-icons:table-columns-move-after-fill",
	});
}

export default Component;
