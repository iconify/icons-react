import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hcl23zthw {
  fill: currentColor;
  d: path("M10.5 1A2.5 2.5 0 0 1 13 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5v-9A2.5 2.5 0 0 1 5.5 1zm-5 1A1.5 1.5 0 0 0 4 3.5v9A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10.5 2zM6 6.751a1 1 0 0 1 1.528-.849L9.53 7.15a1 1 0 0 1 0 1.698l-2 1.246A1 1 0 0 1 6 9.244z");
}
</style><path class="hcl23zthw"/>`,
		"fallback": "fluent:video-short-16-regular",
	});
}

export default Component;
