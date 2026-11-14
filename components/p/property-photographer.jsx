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
		"content": `<style>.jgxk1xqgy {
  d: path("M16.75 19a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x27s89kmw {
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4 21c0-3.823 3.197-6.276 7.409-6.485M14.25 16.5H16l.75-1.5h2.5l.75 1.5h1.75v5.25h-7.5Z");
}
</style><g class="ulnmmdpxh"><path class="x27s89kmw"/><path class="jgxk1xqgy"/></g>`,
		"fallback": "uix-sharp:property-photographer",
	});
}

export default Component;
