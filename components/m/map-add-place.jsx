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
		"content": `<style>.ho7k-abyu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.186 19.553L8.5 18.5l-6 2v-15l6-2l7 2l6-2v11.671M8.5 3.5v15m7-13v6.7M18 15v6m-3-3h6");
}
</style><path class="ho7k-abyu"/>`,
		"fallback": "uix-sharp:map-add-place",
	});
}

export default Component;
