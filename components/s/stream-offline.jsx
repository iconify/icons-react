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
		"content": `<style>.wk9pff2js {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.1 4h12.4v12.5h-1.3m-7.5 0H2.5V5M12 16.5V20m-3.5 0h7M4 2.5l16 18");
}
</style><path class="wk9pff2js"/>`,
		"fallback": "uix-sharp:stream-offline",
	});
}

export default Component;
