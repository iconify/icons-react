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
		"content": `<style>.jezoq0b3e {
  fill: currentColor;
  d: path("M142 48v160a6 6 0 0 1-12 0V58.6L99.09 77.14a6 6 0 0 1-6.18-10.29l40-24A6 6 0 0 1 142 48");
}
</style><path class="jezoq0b3e"/>`,
		"fallback": "ph:number-one-light",
	});
}

export default Component;
