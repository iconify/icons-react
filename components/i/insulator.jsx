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
		"content": `<style>.enbvm5bhi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3h17M12 3v18.5M6.5 10q5.5-5 11 0Zm0 5q5.5-5 11 0Zm0 5q5.5-5 11 0Z");
}
</style><path class="enbvm5bhi"/>`,
		"fallback": "uix-sharp:insulator",
	});
}

export default Component;
