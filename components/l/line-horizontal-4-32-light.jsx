import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fjtjqhb_b {
  fill: currentColor;
  d: path("M29.5 26a.5.5 0 0 1 0 1h-27a.5.5 0 0 1 0-1zm0-7a.5.5 0 0 1 0 1h-27a.5.5 0 0 1 0-1zm0-7a.5.5 0 0 1 0 1h-27a.5.5 0 0 1 0-1zm0-7a.5.5 0 0 1 0 1h-27a.5.5 0 0 1 0-1z");
}
</style><path class="fjtjqhb_b"/>`,
		"fallback": "fluent:line-horizontal-4-32-light",
	});
}

export default Component;
