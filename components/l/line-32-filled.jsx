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
		"content": `<style>.p7t1mcczl {
  fill: currentColor;
  d: path("M28.634 3.366a1.25 1.25 0 0 1 0 1.768l-23.5 23.5a1.25 1.25 0 0 1-1.768-1.768l23.5-23.5a1.25 1.25 0 0 1 1.768 0");
}
</style><path class="p7t1mcczl"/>`,
		"fallback": "fluent:line-32-filled",
	});
}

export default Component;
