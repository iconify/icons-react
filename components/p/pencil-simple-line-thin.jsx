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
		"content": `<style>.chqs85b2e {
  fill: currentColor;
  d: path("M224.49 76.2L179.8 31.51a12 12 0 0 0-17 0L39.51 154.83a12 12 0 0 0-3.51 8.48V208a12 12 0 0 0 12 12h168a4 4 0 0 0 0-8H105.66L224.49 93.17a12 12 0 0 0 0-16.97M94.34 212H48a4 4 0 0 1-4-4v-44.69a4 4 0 0 1 1.17-2.82L136 69.66L186.35 120ZM218.83 87.51L192 114.34L141.66 64l26.83-26.83a4 4 0 0 1 5.66 0l44.68 44.69a4 4 0 0 1 0 5.65");
}
</style><path class="chqs85b2e"/>`,
		"fallback": "ph:pencil-simple-line-thin",
	});
}

export default Component;
