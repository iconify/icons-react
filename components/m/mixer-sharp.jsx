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
		"content": `<style>.dos1lsbkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 5.5V2.75h15.5v7.5H4.75V7.5ZM8 6.5h4.5m-3 3.75v4.25m5-4.25v4.25m-5 0c-1.6 1-1.6 5.5 0 6.75c1.6-1.25 1.6-5.75 0-6.75Zm5 0c-1.6 1-1.6 5.5 0 6.75c1.6-1.25 1.6-5.75 0-6.75Z");
}
</style><path class="dos1lsbkp"/>`,
		"fallback": "iconoven:mixer-sharp",
	});
}

export default Component;
