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
		"content": `<style>.z_-cimb5z {
  fill: currentColor;
  d: path("M12 3.5A7.5 7.5 0 0 0 4.5 11v.25a.75.75 0 0 1-1.5 0V11a9 9 0 0 1 18 0v.25a.75.75 0 0 1-1.5 0V11A7.5 7.5 0 0 0 12 3.5m0 3A4.5 4.5 0 0 0 7.5 11v.25a.75.75 0 0 1-1.5 0V11a6 6 0 1 1 12 0v.25a.75.75 0 0 1-1.5 0V11A4.5 4.5 0 0 0 12 6.5M9 11a3 3 0 1 1 3.75 2.906V16H18a3 3 0 1 1 0 6H6a3 3 0 1 1 0-6h5.25v-2.094A3 3 0 0 1 9 11");
}
</style><path class="z_-cimb5z"/>`,
		"fallback": "fluent:router-24-filled",
	});
}

export default Component;
