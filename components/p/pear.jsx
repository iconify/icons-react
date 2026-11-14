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
		"content": `<style>.ux5_flfvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6c2 0 2.5 2 2.5 3.5s3.5 3 3.5 6.5c0 3-3 5-6 5s-6-2-6-5c0-3.5 3.5-5 3.5-6.5S10 6 12 6Zm0 0c0-1.5.5-2.5 2-3");
}
</style><path class="ux5_flfvz"/>`,
		"fallback": "uix-sharp:pear",
	});
}

export default Component;
