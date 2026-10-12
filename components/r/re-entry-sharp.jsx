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
		"content": `<style>.lc0evnbba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.64 9.42l7.81 3.22q-1.14 6.67-7.81 7.81l-3.22-7.81l.92-2.3zM11.6 6.65l-1.06-3.54M8.95 8.95L6.12 6.12m.53 5.48l-3.54-1.06");
}
</style><path class="lc0evnbba"/>`,
		"fallback": "iconoven:re-entry-sharp",
	});
}

export default Component;
