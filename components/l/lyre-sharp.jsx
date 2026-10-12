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
		"content": `<style>.pb5zlg61x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 20.25c-3-1-3.75-4.25-3.75-7.75V4.833L3 2.75m13 17.5c3-1 3.75-4.25 3.75-7.75V4.833L21 2.75M4.25 7.25h15.5M8 20.25h8m-7-13v13m3-13v13m3-13v13");
}
</style><path class="pb5zlg61x"/>`,
		"fallback": "iconoven:lyre-sharp",
	});
}

export default Component;
