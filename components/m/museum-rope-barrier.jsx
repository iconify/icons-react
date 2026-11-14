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
		"content": `<style>.nbmsu-4qq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 6.5v14m14-14v14m-16 0h4m10 0h4M5 4h.01M19 4h.01M5 9q7 7 14 0");
}
</style><path class="nbmsu-4qq"/>`,
		"fallback": "uix-sharp:museum-rope-barrier",
	});
}

export default Component;
