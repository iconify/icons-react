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
		"content": `<style>.h-3tp7bgo {
  d: path("M15.5 8.5L13 14l3 3v4m-3-7l-1.5 3L9 18.5M3.5 10h4m-4 4H8");
}

.stjdzlbin {
  d: path("M15.25 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-4.75 7L13 8.5h3.5l2.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="stjdzlbin"/><path class="h-3tp7bgo"/></g>`,
		"fallback": "uix-sharp:mode-sports",
	});
}

export default Component;
