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
		"content": `<style>.dv9-xkdec {
  fill: currentColor;
  d: path("M228 224a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m0-80v32a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-32a20 20 0 0 1 20-20h48L83.55 54.33A36 36 0 0 1 119 12h18a36 36 0 0 1 35.44 42.33L160 124h48a20 20 0 0 1 20 20M107.17 50.11l13.2 73.89h15.26l13.2-73.89A12 12 0 0 0 137 36h-18a12 12 0 0 0-11.82 14.11ZM204 148H52v24h152Z");
}
</style><path class="dv9-xkdec"/>`,
		"fallback": "ph:stamp-bold",
	});
}

export default Component;
