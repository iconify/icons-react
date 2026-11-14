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
		"content": `<style>.ei4mxjbkt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 3.5h12.5A1.75 1.75 0 0 1 20 5.25A1.75 1.75 0 0 1 18.25 7H5.75A1.75 1.75 0 0 1 4 5.25A1.75 1.75 0 0 1 5.75 3.5M7 7L4.5 20.5M17 7l2.5 13.5M12 7v13.5");
}
</style><path class="ei4mxjbkt"/>`,
		"fallback": "uix:stool",
	});
}

export default Component;
