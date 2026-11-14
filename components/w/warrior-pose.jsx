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
		"content": `<style>.nltp5gldd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-7.5 5h19m-9.5 0V14l-8 7.5m8-7.5l5.5 1v6.5");
}
</style><path class="nltp5gldd"/>`,
		"fallback": "uix-sharp:warrior-pose",
	});
}

export default Component;
