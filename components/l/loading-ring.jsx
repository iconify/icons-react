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
		"content": `<style>.cxbpipdca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5a9.5 9.5 0 1 1-8.227 14.25m-.949-7.209A9.5 9.5 0 0 1 7.25 3.773");
}
</style><path class="cxbpipdca"/>`,
		"fallback": "uix-sharp:loading-ring",
	});
}

export default Component;
