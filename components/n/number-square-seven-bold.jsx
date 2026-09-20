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
		"content": `<style>.gtc-yjbrf {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM92 88a12 12 0 0 1 12-12h48a12 12 0 0 1 11.28 16.1l-32 88a12 12 0 0 1-22.56-8.2l26.15-71.9H104a12 12 0 0 1-12-12");
}
</style><path class="gtc-yjbrf"/>`,
		"fallback": "ph:number-square-seven-bold",
	});
}

export default Component;
