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
		"content": `<style>.fcm_4vbzu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 21.25h-1V12a9.25 9.25 0 0 1 18.5 0v9.25H17V14.5a5 5 0 0 0-10 0v6.75Zm7-5.25L9.5 21.25M13.25 16l1.25 5.25");
}
</style><path class="fcm_4vbzu"/>`,
		"fallback": "iconoven:tunnel-sharp",
	});
}

export default Component;
