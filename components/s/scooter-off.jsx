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
		"content": `<style>.lpvxyqbok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm18.196-1.195q-.169-.309-.415-.56q-.247-.25-.554-.423M3 16h9.1m6.9-.9V4m-3 0h5.5m-18-.5l17 17");
}
</style><path class="lpvxyqbok"/>`,
		"fallback": "uix-sharp:scooter-off",
	});
}

export default Component;
