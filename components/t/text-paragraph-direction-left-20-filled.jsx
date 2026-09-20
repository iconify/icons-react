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
		"content": `<style>.uejgc-vik {
  fill: currentColor;
  d: path("M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1zM5.146 7.646a.5.5 0 1 1 .708.708L4.207 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708z");
}
</style><path class="uejgc-vik"/>`,
		"fallback": "fluent:text-paragraph-direction-left-20-filled",
	});
}

export default Component;
