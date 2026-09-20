import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.go79nphtg {
  fill: currentColor;
  d: path("M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1zM3.854 7.646a.5.5 0 1 0-.708.708L4.793 10l-1.647 1.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708z");
}
</style><path class="go79nphtg"/>`,
		"fallback": "fluent:text-paragraph-direction-right-20-filled",
	});
}

export default Component;
