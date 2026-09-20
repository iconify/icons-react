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
		"content": `<style>.kvneriu6n {
  fill: currentColor;
  d: path("m245 124.67l-45.63-68.44A14 14 0 0 0 187.72 50H32a6 6 0 0 0-5 9.33L72.79 128L27 196.67a6 6 0 0 0 5 9.33h155.72a14 14 0 0 0 11.65-6.23L245 131.33a6 6 0 0 0 0-6.66m-55.61 68.44a2 2 0 0 1-1.66.89H43.21L85 131.33a6 6 0 0 0 0-6.66L43.21 62h144.51a2 2 0 0 1 1.66.89L232.79 128Z");
}
</style><path class="kvneriu6n"/>`,
		"fallback": "ph:tag-chevron-light",
	});
}

export default Component;
