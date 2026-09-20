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
		"content": `<style>.b01l-xb_l {
  fill: currentColor;
  d: path("M160 172a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0-48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m56-64H113.76l81.69-24.5a12 12 0 0 0-6.9-23l-160 48A12 12 0 0 0 20 72v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-4 128H44V84h168ZM60 116a12 12 0 0 1 12-12h24a12 12 0 0 1 0 24H72a12 12 0 0 1-12-12m0 40a12 12 0 0 1 12-12h24a12 12 0 0 1 0 24H72a12 12 0 0 1-12-12");
}
</style><path class="b01l-xb_l"/>`,
		"fallback": "ph:radio-bold",
	});
}

export default Component;
