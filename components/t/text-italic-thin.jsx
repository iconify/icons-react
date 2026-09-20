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
		"content": `<style>.zklf_sqya {
  fill: currentColor;
  d: path("M196 56a4 4 0 0 1-4 4h-37.12l-45.33 136H144a4 4 0 0 1 0 8H64a4 4 0 0 1 0-8h37.12l45.33-136H112a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4");
}
</style><path class="zklf_sqya"/>`,
		"fallback": "ph:text-italic-thin",
	});
}

export default Component;
