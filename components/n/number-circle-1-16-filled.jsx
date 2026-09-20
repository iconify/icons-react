import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bgd5gjbdf {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1 4.25v5.25a.5.5 0 0 1-1 0V6.986a3.6 3.6 0 0 1-1.043.72a.5.5 0 1 1-.414-.911a2.7 2.7 0 0 0 1.174-1.046a3 3 0 0 0 .3-.628v-.005A.5.5 0 0 1 9 5.25");
}
</style><path class="bgd5gjbdf"/>`,
		"fallback": "fluent:number-circle-1-16-filled",
	});
}

export default Component;
