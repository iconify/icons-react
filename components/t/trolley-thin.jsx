import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sv8d9kaga {
  fill: currentColor;
  d: path("M84 224a12 12 0 1 1-12-12a12 12 0 0 1 12 12m132-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m24-32H52V75.31a12 12 0 0 0-3.51-8.48L26.83 45.17a4 4 0 0 0-5.66 5.66l21.66 21.65A4 4 0 0 1 44 75.31V180H32a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8");
}
</style><path class="sv8d9kaga"/>`,
		"fallback": "ph:trolley-thin",
	});
}

export default Component;
