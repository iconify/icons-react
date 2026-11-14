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
		"content": `<style>.k6iu3-xld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18v17H3Zm0 5h18m-12 0v12m3-8.5h5.5M12 16.75h5.5");
}
</style><path class="k6iu3-xld"/>`,
		"fallback": "uix-sharp:league-table",
	});
}

export default Component;
