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
		"content": `<style>.a9kr3dmeg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c3.6 0 6.75 5.25 6.75 10.5a6.75 6.75 0 0 1-13.5 0C5.25 8 8.4 2.75 12 2.75Zm-6.4 9h12.8m-6.4-5v2M8.75 15v1.25M12 15v2.25M15.25 15v1.25");
}
</style><path class="a9kr3dmeg"/>`,
		"fallback": "iconoven:timer-egg-sharp",
	});
}

export default Component;
