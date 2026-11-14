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
		"content": `<style>.epxw0_g4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7h14v10h-14ZM6 12h4.5m9-7.5v15m-2-15h4m-4 15h4");
}
</style><path class="epxw0_g4c"/>`,
		"fallback": "uix-sharp:rename",
	});
}

export default Component;
