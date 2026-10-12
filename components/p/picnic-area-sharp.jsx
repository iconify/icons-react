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
		"content": `<style>.btcrn9i1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 8.5h17.5m-13 0L5 21.25M16.25 8.5L19 21.25M2.75 15h18.5");
}
</style><path class="btcrn9i1m"/>`,
		"fallback": "iconoven:picnic-area-sharp",
	});
}

export default Component;
