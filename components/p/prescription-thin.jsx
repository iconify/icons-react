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
		"content": `<style>.nf61w0bjt {
  fill: currentColor;
  d: path("m177.66 188l25.17-25.17a4 4 0 0 0-5.66-5.66L172 182.34L121.66 132H124a48 48 0 0 0 0-96H72a4 4 0 0 0-4 4v152a4 4 0 0 0 8 0v-60h34.34l56 56l-25.17 25.17a4 4 0 0 0 5.66 5.66L172 193.66l25.17 25.17a4 4 0 0 0 5.66-5.66ZM76 44h48a40 40 0 0 1 0 80H76Z");
}
</style><path class="nf61w0bjt"/>`,
		"fallback": "ph:prescription-thin",
	});
}

export default Component;
