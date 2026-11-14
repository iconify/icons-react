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
		"content": `<style>.hy_jd70na {
  d: path("M17 10.25a1.75 3.5 0 1 0 3.5 0a1.75 3.5 0 1 0-3.5 0ZM8 21.5c-1.5-3-3.5-4.5-5.5-5m6-1.5c1.5-1.75 3.5-2.25 6-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y7okrmbcz {
  d: path("M8 21.5C8 13 11 5.5 16 4c1.5-.5 2.5.5 2.75 2.75");
}
</style><g class="ulnmmdpxh"><path class="y7okrmbcz"/><path class="hy_jd70na"/></g>`,
		"fallback": "uix-sharp:rice-plant",
	});
}

export default Component;
