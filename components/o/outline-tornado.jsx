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
		"content": `<style>.ly7y3aczv {
  fill: currentColor;
  d: path("M23 3H1l11 19zm-3.47 2l-1.74 3H6.21L4.47 5zm-9.27 10h3.48L12 18.01zm4.64-2H9.1l-1.74-3h9.27z");
}
</style><path class="ly7y3aczv"/>`,
		"fallback": "ic:outline-tornado",
	});
}

export default Component;
