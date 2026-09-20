import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l_eie3b7v {
  fill: currentColor;
  d: path("M21 16a3 3 0 0 1 3 3v.715C24 23.292 19.79 26 14 26S4 23.433 4 19.715V19a3 3 0 0 1 3-3zm0 1.5H7a1.5 1.5 0 0 0-1.493 1.355L5.5 19v.715c0 2.674 3.389 4.785 8.5 4.785c4.926 0 8.355-2.105 8.496-4.624l.004-.161V19a1.5 1.5 0 0 0-1.355-1.493zM14 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 1.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9");
}
</style><path class="l_eie3b7v"/>`,
		"fallback": "fluent:person-28-regular",
	});
}

export default Component;
