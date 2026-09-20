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
		"content": `<style>.pafmy_bkm {
  fill: currentColor;
  d: path("m180.49 188l23.75-23.76a6 6 0 0 0-8.48-8.48L172 179.51l-45.58-45.57A50 50 0 0 0 124 34H72a6 6 0 0 0-6 6v152a6 6 0 0 0 12 0v-58h31.51l54 54l-23.75 23.76a6 6 0 1 0 8.48 8.48L172 196.49l23.76 23.75a6 6 0 0 0 8.48-8.48ZM78 46h46a38 38 0 0 1 0 76H78Z");
}
</style><path class="pafmy_bkm"/>`,
		"fallback": "ph:prescription-light",
	});
}

export default Component;
