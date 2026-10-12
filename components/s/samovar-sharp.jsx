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
		"content": `<style>.s8qybzblq {
  d: path("M9.25 8.25V5.5h5.5v2.75ZM12 5.5V3M8 8.25h10.5V11c0 3-2 5.5-4 6.5l1.75 2.5l1.214 1.352l-1.814-.102h-7.3l-1.814.102L7.75 20l1.75-2.5c-2-1-4-3.5-4-6.5V8.25z");
}

.uj718v1jd {
  d: path("M18.25 13.5H20v1.75m-12.75-4c3 .75 6.5.75 9.5 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="s8qybzblq"/><path class="uj718v1jd"/></g>`,
		"fallback": "iconoven:samovar-sharp",
	});
}

export default Component;
