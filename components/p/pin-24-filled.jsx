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
		"content": `<style>.f3k1djh8z {
  fill: currentColor;
  d: path("m21.068 7.758l-4.826-4.826a2.75 2.75 0 0 0-4.404.715l-2.435 4.87a.75.75 0 0 1-.426.374l-4.166 1.44a1.25 1.25 0 0 0-.476 2.065L7.439 15.5L3 19.94V21h1.06l4.44-4.44l3.105 3.105a1.25 1.25 0 0 0 2.065-.476l1.44-4.166a.75.75 0 0 1 .373-.426l4.87-2.435a2.75 2.75 0 0 0 .715-4.404");
}
</style><path class="f3k1djh8z"/>`,
		"fallback": "fluent:pin-24-filled",
	});
}

export default Component;
