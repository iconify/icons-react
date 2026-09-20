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
		"content": `<style>.px4lp1bni {
  fill: currentColor;
  d: path("M3 21V7h3.616V3H21v14.385h-4V21zm4.616-4.615H20V4H7.616zM10.5 10.5v-1h7v1z");
}
</style><path class="px4lp1bni"/>`,
		"fallback": "material-symbols-light:shadow-minus-sharp",
	});
}

export default Component;
