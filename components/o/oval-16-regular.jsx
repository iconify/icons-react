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
		"content": `<style>.ft756bbez {
  fill: currentColor;
  d: path("M1 8a5 5 0 0 1 5-5h4a5 5 0 0 1 0 10H6a5 5 0 0 1-5-5m5-4a4 4 0 1 0 0 8h4a4 4 0 0 0 0-8z");
}
</style><path class="ft756bbez"/>`,
		"fallback": "fluent:oval-16-regular",
	});
}

export default Component;
