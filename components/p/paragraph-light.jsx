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
		"content": `<style>.zy1yti3jf {
  fill: currentColor;
  d: path("M208 42H96a62 62 0 0 0 0 124h42v42a6 6 0 0 0 12 0V54h28v154a6 6 0 0 0 12 0V54h18a6 6 0 0 0 0-12m-70 112H96a50 50 0 0 1 0-100h42Z");
}
</style><path class="zy1yti3jf"/>`,
		"fallback": "ph:paragraph-light",
	});
}

export default Component;
