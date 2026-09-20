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
		"content": `<style>.ephcfobhf {
  fill: currentColor;
  d: path("M182 72a54 54 0 1 0-60 53.66V232a6 6 0 0 0 12 0V125.66A54.07 54.07 0 0 0 182 72m-54 42a42 42 0 1 1 42-42a42 42 0 0 1-42 42");
}
</style><path class="ephcfobhf"/>`,
		"fallback": "ph:map-pin-simple-light",
	});
}

export default Component;
