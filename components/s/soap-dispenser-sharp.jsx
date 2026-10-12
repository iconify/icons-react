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
		"content": `<style>.p63g7ukwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.75v-3m3 0H7.25v2m2.75 1h4v2.5h-4zm-3.75 2.5h11.5v11H6.25zm3 4.5h5.5");
}
</style><path class="p63g7ukwk"/>`,
		"fallback": "iconoven:soap-dispenser-sharp",
	});
}

export default Component;
