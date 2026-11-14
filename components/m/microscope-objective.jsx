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
		"content": `<style>.nd1xgvbry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7v3h-7ZM6 5.5h12V15H6ZM8.5 15l1.5 5.5h4l1.5-5.5M6 10.25h12");
}
</style><path class="nd1xgvbry"/>`,
		"fallback": "uix-sharp:microscope-objective",
	});
}

export default Component;
