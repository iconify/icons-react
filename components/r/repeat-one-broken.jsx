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
		"content": `<style>.brc86cc0s {
  d: path("M9.5 19H9.00028C6.62153 19 4.51981 17.8135 3.25478 16M9 3L11 5H9C5.13401 5 2 8.13401 2 12");
}

.epa2j5v2j {
  d: path("M15 21L13 19H15C18.866 19 22 15.866 22 12M14.5 5H15C17.3787 5 19.4804 6.18652 20.7453 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vny47hble {
  d: path("M10.5 11.5L12 10V14");
}
</style><g class="hntgybcog"><path class="vny47hble"/><path class="brc86cc0s"/><path class="epa2j5v2j"/></g>`,
		"fallback": "solar:repeat-one-broken",
	});
}

export default Component;
