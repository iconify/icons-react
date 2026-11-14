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
		"content": `<style>.wmd0gwbwf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm5 5v3m-9.5 0h19m-19 5h19M12 7.5l2.25-2.25");
}
</style><path class="wmd0gwbwf"/>`,
		"fallback": "uix-sharp:pressure-sensor",
	});
}

export default Component;
