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
		"content": `<style>.v0dnmjbjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 5.5a7.5 7.5 0 1 0 7.75 9a6 6 0 0 1-7.75-9Zm3.25-2.75h3.25L14.25 6.5h3.25m1 2.25h2.75l-2.75 3h2.75");
}
</style><path class="v0dnmjbjm"/>`,
		"fallback": "iconoven:jet-lag-sharp",
	});
}

export default Component;
