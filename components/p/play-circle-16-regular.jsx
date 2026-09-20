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
		"content": `<style>.gzc7s4boi {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2M6 6.249a.75.75 0 0 1 1.128-.647l3 1.75a.75.75 0 0 1 0 1.295l-3 1.751A.75.75 0 0 1 6 9.751z");
}
</style><path class="gzc7s4boi"/>`,
		"fallback": "fluent:play-circle-16-regular",
	});
}

export default Component;
