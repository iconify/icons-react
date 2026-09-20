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
		"content": `<style>.r2fgkdbim {
  fill: currentColor;
  d: path("M128 40a56 56 0 1 0 15.62 109.77L113 204.07a8 8 0 1 0 14 7.85l49.55-88A56 56 0 0 0 128 40m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}
</style><path class="r2fgkdbim"/>`,
		"fallback": "ph:number-nine",
	});
}

export default Component;
