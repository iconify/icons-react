import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.alpgeibpq {
  fill: currentColor;
  d: path("M14 6V4h-4v2zM4 8v11h16V8zm18-2v15H2.01V6H8V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2z");
}
</style><path class="alpgeibpq"/>`,
		"fallback": "ic:sharp-work-outline",
	});
}

export default Component;
