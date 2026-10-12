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
		"content": `<style>.tgakl-buh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4V5.5h-4zm2 2.75V8M5.75 8h12.5v13.25H5.75zm0 3.25h12.5M9 15.5h6m-6 2.75h4");
}
</style><path class="tgakl-buh"/>`,
		"fallback": "iconoven:space-food-sharp",
	});
}

export default Component;
