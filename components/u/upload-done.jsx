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
		"content": `<style>.ut09n4n6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15v3a2 2 0 0 0 2 2h6.25M12 15V3.5M7.5 8L12 3.5L16.5 8m-1.75 10l2 2L21 15.75");
}
</style><path class="ut09n4n6t"/>`,
		"fallback": "uix-sharp:upload-done",
	});
}

export default Component;
