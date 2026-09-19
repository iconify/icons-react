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
		"content": `<style>.oio230l4t {
  fill: currentColor;
  d: path("M21 3H3v18h18zM11 17H7v-4h4zm0-6H7V7h4zm6 6h-4v-4h4zm0-6h-4V7h4z");
}
</style><path class="oio230l4t"/>`,
		"fallback": "ic:sharp-dataset",
	});
}

export default Component;
