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
		"content": `<style>.zbu7n5o_d {
  fill: currentColor;
  d: path("M204 208a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h152a4 4 0 0 1 4 4m-4-44h-96a52 52 0 0 1 0-104h96a4 4 0 0 0 0-8h-96a60 60 0 0 0 0 120h96a4 4 0 0 0 0-8");
}
</style><path class="zbu7n5o_d"/>`,
		"fallback": "ph:subset-of-thin",
	});
}

export default Component;
