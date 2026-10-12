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
		"content": `<style>.plakfh4hb {
  d: path("M6.25 2.75h11.5v18.5H6.25zm0 3h11.5");
}

.uc7bodbyb {
  d: path("m8.5 8.5l1 4h5l1-4m-6 1.5c.85-.6 1.65.6 2.5 0s1.65.6 2.5 0M12 14.25l3 4.5H9Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="plakfh4hb"/><path class="uc7bodbyb"/></g>`,
		"fallback": "iconoven:laundry-tag-sharp",
	});
}

export default Component;
