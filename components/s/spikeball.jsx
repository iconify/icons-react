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
		"content": `<style>.i22926b3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 16a9.25 4 0 1 0 18.5 0a9.25 4 0 1 0-18.5 0ZM9 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM2.75 16h18.5M12 12v8");
}
</style><path class="i22926b3o"/>`,
		"fallback": "uix-sharp:spikeball",
	});
}

export default Component;
