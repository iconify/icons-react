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
		"content": `<style>.ger3qfbnk {
  fill: currentColor;
  d: path("m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M144 120H80a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16");
}
</style><path class="ger3qfbnk"/>`,
		"fallback": "ph:magnifying-glass-minus-fill",
	});
}

export default Component;
