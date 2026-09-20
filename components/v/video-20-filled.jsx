import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e04oqjbhw {
  fill: currentColor;
  d: path("M2 7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm14.037 7.776L14 13.369V6.63l2.037-1.406a1.25 1.25 0 0 1 1.96 1.028v7.495a1.25 1.25 0 0 1-1.96 1.029");
}
</style><path class="e04oqjbhw"/>`,
		"fallback": "fluent:video-20-filled",
	});
}

export default Component;
