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
		"content": `<style>.bq0ypf47a {
  d: path("M4 3H20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iim04tfhn {
  d: path("M9 8.5L12 5.5L15 8.5M12 5.5V18.5M9 15.5L12 18.5L15 15.5");
}

.tlstgmb9z {
  d: path("M4 21H13M17 21H20");
}
</style><g class="hntgybcog"><path class="tlstgmb9z"/><path class="bq0ypf47a"/><path class="iim04tfhn"/></g>`,
		"fallback": "solar:paragraph-spacing-broken",
	});
}

export default Component;
