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
		"content": `<style>.ubat_lb1v {
  fill: currentColor;
  d: path("M25 22a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z");
}
</style><path class="ubat_lb1v"/>`,
		"fallback": "fluent:line-horizontal-4-28-filled",
	});
}

export default Component;
