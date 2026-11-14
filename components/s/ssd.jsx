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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v994gabbg {
  d: path("M5.5 5h13v14h-13Z");
}

.xrkaywbyx {
  d: path("M9 9.5h6v5H9Zm-6.5-1h3m-3 3.5h3m-3 3.5h3m13-7h3m-3 3.5h3m-3 3.5h3");
}
</style><g class="ulnmmdpxh"><path class="v994gabbg"/><path class="xrkaywbyx"/></g>`,
		"fallback": "uix-sharp:ssd",
	});
}

export default Component;
