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
		"content": `<style>.p-z2n3bcy {
  fill: currentColor;
  d: path("M18.949 20.684a.999.999 0 0 1-1.396 1.21L12 19.118l-5.553 2.776a.999.999 0 0 1-1.396-1.21l6-18a1 1 0 0 1 1.898 0Z");
}
</style><path class="p-z2n3bcy"/>`,
		"fallback": "coolicons:navigation-alt-fill-sharp",
	});
}

export default Component;
