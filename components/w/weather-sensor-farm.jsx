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
		"content": `<style>.v6qlbhb3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21V8M4.5 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-7 0h7m-6 6h5v4.5h-5Zm-5.25 8.25v-2.5m0 .75c-.05-1.32-.93-2.02-2.25-2c-.08 1.2.8 1.9 2.25 2Zm0-.75c-.05-1.45.82-2.5 2.25-2.5c-.03 1.4-.9 2.45-2.25 2.5ZM3 21h18");
}
</style><path class="v6qlbhb3o"/>`,
		"fallback": "uix-sharp:weather-sensor-farm",
	});
}

export default Component;
