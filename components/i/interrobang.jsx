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
		"content": `<style>.m2qbu2bvi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 8.5C7.5 5.75 9.5 4 12 4s4.5 1.75 4.5 4c0 3.25-4.5 3.75-4.5 6.5M12 4v10.5m0 4.5h.01");
}
</style><path class="m2qbu2bvi"/>`,
		"fallback": "uix-sharp:interrobang",
	});
}

export default Component;
