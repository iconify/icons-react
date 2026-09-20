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
		"content": `<style>.oplgvy8pn {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m0-128a44.05 44.05 0 0 0-44 44a12 12 0 0 1-24 0a68.07 68.07 0 0 1 68-68a12 12 0 0 1 0 24m68 44a68.07 68.07 0 0 1-68 68a12 12 0 0 1 0-24a44.05 44.05 0 0 0 44-44a12 12 0 0 1 24 0m-68 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28");
}
</style><path class="oplgvy8pn"/>`,
		"fallback": "ph:vinyl-record-bold",
	});
}

export default Component;
