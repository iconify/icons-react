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
		"content": `<style>.ggr881bxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12v9H6Zm6 9v7m-4 0l4-3l4 3m-13.5 3h19M9 5.5h6m-6 3h4");
}
</style><path class="ggr881bxj"/>`,
		"fallback": "uix-sharp:orchestra-pit",
	});
}

export default Component;
