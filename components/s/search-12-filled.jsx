import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a73k_w6kx {
  fill: currentColor;
  d: path("M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1M2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0");
}
</style><path class="a73k_w6kx"/>`,
		"fallback": "fluent:search-12-filled",
	});
}

export default Component;
