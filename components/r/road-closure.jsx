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
		"content": `<style>.znl5u7bki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19v6h-19Zm2.5 6v9m14-9v9m-12-9l3-6m2 6l3-6");
}
</style><path class="znl5u7bki"/>`,
		"fallback": "uix-sharp:road-closure",
	});
}

export default Component;
