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
		"content": `<style>.h64qreepf {
  cx: 12px;
  cy: 12px;
  r: 3px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.klpl0gb7n {
  d: path("M7.40381 16.5962C4.8654 14.0578 4.8654 9.94222 7.40381 7.40381M16.5962 7.40381C19.1346 9.94222 19.1346 14.0578 16.5962 16.5962");
}

.uj22mebwr {
  d: path("M19.0711 19.0711C15.1658 22.9763 8.83418 22.9763 4.92893 19.0711C1.02369 15.1658 1.02369 8.83418 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C22.9763 8.83418 22.9763 15.1658 19.0711 19.0711Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><circle class="h64qreepf"/><path class="uj22mebwr"/><path class="klpl0gb7n"/></g>`,
		"fallback": "solar:vinyl-record-line-duotone",
	});
}

export default Component;
