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
		"content": `<style>.ab6bizu9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 7l4.25 12L11 7m6.5 13V4m-3.25 3.25L17.5 4l3.25 3.25");
}
</style><path class="ab6bizu9k"/>`,
		"fallback": "uix-sharp:version-bump",
	});
}

export default Component;
