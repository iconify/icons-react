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
		"content": `<style>.c-gfh_fab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.75v-2h4v2m-4 0l-4 13.5l2.25 2.5m5.75-16l4 13.5l-2.25 2.5");
}
</style><path class="c-gfh_fab"/>`,
		"fallback": "iconoven:tongs-sharp",
	});
}

export default Component;
