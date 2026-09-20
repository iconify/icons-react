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
		"content": `<style>.c--t84b6m {
  fill: currentColor;
  d: path("M180 160a60 60 0 0 1-100 44.72a12 12 0 1 1 16-17.88A36 36 0 1 0 120 124a12 12 0 0 1-9.6-19.2L144 60H88a12 12 0 0 1 0-24h80a12 12 0 0 1 9.6 19.2l-36.48 48.64A60.11 60.11 0 0 1 180 160");
}
</style><path class="c--t84b6m"/>`,
		"fallback": "ph:number-three-bold",
	});
}

export default Component;
