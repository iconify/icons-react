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
		"content": `<style>.a4j489byq {
  fill: currentColor;
  d: path("M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8m0-152v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-68 56a8 8 0 0 0-3.41-6.55l-40-28A8 8 0 0 0 108 84v56a8 8 0 0 0 12.59 6.55l40-28A8 8 0 0 0 164 112");
}
</style><path class="a4j489byq"/>`,
		"fallback": "ph:video-fill",
	});
}

export default Component;
