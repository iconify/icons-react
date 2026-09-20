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
		"content": `<style>.g9a264b6z {
  fill: currentColor;
  d: path("M246.66 132.44L201 200.88a16 16 0 0 1-13.28 7.12H32a8 8 0 0 1-6.66-12.44L70.39 128l-45-67.56A8 8 0 0 1 32 48h155.72A16 16 0 0 1 201 55.12l45.63 68.44a8 8 0 0 1 .03 8.88");
}
</style><path class="g9a264b6z"/>`,
		"fallback": "ph:tag-chevron-fill",
	});
}

export default Component;
