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
		"content": `<style>.dy--grbge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11c0-4.5-3-7-8.5-7c0 4.5 3 7 8.5 7Zm0 0c0-4.5 3-7 8.5-7c0 4.5-3 7-8.5 7Zm0 0v10");
}
</style><path class="dy--grbge"/>`,
		"fallback": "uix-sharp:leaf-pair",
	});
}

export default Component;
