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
		"content": `<style>.bf1ntdbme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 6l6-2.5L15 6l6-2.5V18l-6 2.5L9 18l-6 2.5Zm11 2.5l3.5 3.5m0-3.5L14 12m-7.5 3.5h.01m2.74-1.25h.01M12 13h.01");
}
</style><path class="bf1ntdbme"/>`,
		"fallback": "uix-sharp:treasure-map",
	});
}

export default Component;
