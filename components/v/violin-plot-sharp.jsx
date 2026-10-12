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
		"content": `<style>.tj38rac7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4.5c1.5 0 3.25 1 3.25 2.75s-.75 2.75-.75 4s3 2.25 3 4.75s-3 3.5-5.5 3.5s-5.5-1-5.5-3.5s3-3.5 3-4.75s-.75-2.25-.75-4S10.5 4.5 12 4.5Zm0-1.75V4.5m0 15v1.75m0-9.75v5");
}
</style><path class="tj38rac7n"/>`,
		"fallback": "iconoven:violin-plot-sharp",
	});
}

export default Component;
