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
		"content": `<style>.jqj6aybyg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5h19l-2.5 4H6Zm8.5-13v13M11 4l8 8.75h-8M8.25 5.5v7.25H3.5Z");
}
</style><path class="jqj6aybyg"/>`,
		"fallback": "uix-sharp:sailing-dinghy",
	});
}

export default Component;
