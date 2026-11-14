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
		"content": `<style>.dm_wopyrf {
  d: path("M16.5 17.5v-1a1.5 1.5 0 0 1 3 0v1");
}

.dv44oxbbb {
  d: path("M12.21 19.914L8 18l-5.5 2.5V5L8 2.5L13.5 5l6-2.5v9.917M8 2.5V18m5.5-13v9.7m1.5 2.8h6v4h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dv44oxbbb"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:map-region-locked",
	});
}

export default Component;
