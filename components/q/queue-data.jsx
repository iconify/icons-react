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
		"content": `<style>.ijzd0lqcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 5h5v5h-5ZM9.5 5h5v5h-5Zm7.25 0h5v5h-5ZM2.5 16h19m-3-3l3 3l-3 3");
}
</style><path class="ijzd0lqcg"/>`,
		"fallback": "uix-sharp:queue-data",
	});
}

export default Component;
