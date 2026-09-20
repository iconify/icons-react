import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.owclsf4-g {
  fill: currentColor;
  d: path("M9 17a3 3 0 1 0 0-6a3 3 0 0 0 0 6M8 8a6 6 0 0 0 0 12h12a6 6 0 0 0 0-12zm-4.5 6A4.5 4.5 0 0 1 8 9.5h12a4.5 4.5 0 1 1 0 9H8A4.5 4.5 0 0 1 3.5 14");
}
</style><path class="owclsf4-g"/>`,
		"fallback": "fluent:toggle-left-28-regular",
	});
}

export default Component;
