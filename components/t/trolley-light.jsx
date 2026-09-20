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
		"content": `<style>.a5jtvpb-r {
  fill: currentColor;
  d: path("M86 224a14 14 0 1 1-14-14a14 14 0 0 1 14 14m130-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14m24-32H54V75.31a13.94 13.94 0 0 0-4.1-9.9L28.24 43.76a6 6 0 1 0-8.48 8.48L41.41 73.9a2 2 0 0 1 .59 1.41V178H32a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12");
}
</style><path class="a5jtvpb-r"/>`,
		"fallback": "ph:trolley-light",
	});
}

export default Component;
