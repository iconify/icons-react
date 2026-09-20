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
		"content": `<style>.re1udkb_z {
  fill: currentColor;
  d: path("m13.294 14.001l.852.853a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l3.169 3.168l-2.295.775A1.5 1.5 0 0 0 1 7.217v1.566a1.5 1.5 0 0 0 1.018 1.42L4 10.877V12a3 3 0 0 0 5.872.868l3.146 1.067q.138.046.276.066m-1.556-1.556L2.339 9.257A.5.5 0 0 1 2 8.783V7.218a.5.5 0 0 1 .34-.474l2.764-.933zm-2.814.101A2 2 0 0 1 5 12v-.785zM14 3.504v8.376l.964.964q.036-.158.036-.328V3.503a1.5 1.5 0 0 0-1.98-1.421L6.43 4.308l.788.789l6.122-2.068a.5.5 0 0 1 .66.474");
}
</style><path class="re1udkb_z"/>`,
		"fallback": "fluent:megaphone-off-16-regular",
	});
}

export default Component;
