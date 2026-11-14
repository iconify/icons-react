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
		"content": `<style>.ozhxyvx4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19M4 14v4m16-4v4M7.5 5h9v9h-9ZM12 5v3.5");
}
</style><path class="ozhxyvx4o"/>`,
		"fallback": "uix-sharp:wall-shelf",
	});
}

export default Component;
