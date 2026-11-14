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
		"content": `<style>.inn5zibsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 5.5l6-2l7 2l6-2v15l-6 2l-7-2l-6 2Zm4 8.5h11m-11 0v-3.5M12 14v-3.5m5.5 3.5v-3.5M9.25 14v-2m5.5 2v-2");
}
</style><path class="inn5zibsj"/>`,
		"fallback": "uix-sharp:map-units",
	});
}

export default Component;
