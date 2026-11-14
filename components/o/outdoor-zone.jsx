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
		"content": `<style>.degrfabdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7V3h4m10 0h4v4m0 10v4h-4M7 21H3v-4m7.5-14h3m-3 18h3M3 10.5v3m18-3v3M12 6l4 8.5H8Zm0 8.5V18");
}
</style><path class="degrfabdj"/>`,
		"fallback": "uix-sharp:outdoor-zone",
	});
}

export default Component;
