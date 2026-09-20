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
		"content": `<style>.dnl5skgje {
  fill: currentColor;
  d: path("M180 168v16a4 4 0 0 1-8 0v-16a44 44 0 0 0-88 0v16a4 4 0 0 1-8 0v-16a52 52 0 0 1 104 0m-52-84a84.09 84.09 0 0 0-84 84v16a4 4 0 0 0 8 0v-16a76 76 0 0 1 152 0v16a4 4 0 0 0 8 0v-16a84.09 84.09 0 0 0-84-84m0-32A116.13 116.13 0 0 0 12 168v16a4 4 0 0 0 8 0v-16a108 108 0 0 1 216 0v16a4 4 0 0 0 8 0v-16A116.13 116.13 0 0 0 128 52");
}
</style><path class="dnl5skgje"/>`,
		"fallback": "ph:rainbow-thin",
	});
}

export default Component;
