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
		"content": `<style>.k4xjs9bdg {
  d: path("M11.3 19H2.5V6h17v5.2M8.5 6V3h5v3M11 10v5m-2.5-2.5h3.4");
}

.u-uymxr6j {
  d: path("M15 14h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.5l-3 1.75V19H15a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k4xjs9bdg"/><path class="u-uymxr6j"/></g>`,
		"fallback": "uix-sharp:mental-health-first-aid",
	});
}

export default Component;
