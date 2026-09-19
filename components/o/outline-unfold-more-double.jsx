import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uugzbugwv {
  fill: currentColor;
  d: path("M12 7.83L15.17 11l1.41-1.41L12 5L7.41 9.59L8.83 11zm0-5L15.17 6l1.41-1.41L12 0L7.41 4.59L8.83 6zm0 18.34L8.83 18l-1.41 1.41L12 24l4.59-4.59L15.17 18zm0-5L8.83 13l-1.41 1.41L12 19l4.59-4.59L15.17 13z");
}
</style><path class="uugzbugwv"/>`,
		"fallback": "ic:outline-unfold-more-double",
	});
}

export default Component;
