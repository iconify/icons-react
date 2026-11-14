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
		"content": `<style>.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yj0nz6rrf {
  d: path("M2.5 3h13v3.5h-13Zm0 7h11v3.5h-11Zm0 7h9v3.5h-9Zm18.25 1.5A2.75 2.75 0 1 1 18 15.75");
}
</style><g class="ulnmmdpxh"><path class="yj0nz6rrf"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:routine",
	});
}

export default Component;
