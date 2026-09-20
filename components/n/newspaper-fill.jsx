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
		"content": `<style>.p3xzowbeh {
  fill: currentColor;
  d: path("M216 48H56a16 16 0 0 0-16 16v120a8 8 0 0 1-16 0V88a8 8 0 0 0-16 0v96.11A24 24 0 0 0 32 208h176a24 24 0 0 0 24-24V64a16 16 0 0 0-16-16m-40 104H96a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16");
}
</style><path class="p3xzowbeh"/>`,
		"fallback": "ph:newspaper-fill",
	});
}

export default Component;
