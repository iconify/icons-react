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
		"content": `<style>.xf3py0b3j {
  fill: currentColor;
  d: path("M237.66 45.66A8 8 0 0 0 232 32H24a8 8 0 0 0-5.66 13.66L120 147.31V208H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-60.69Zm-25 2.34l-16 16H59.31l-16-16Z");
}
</style><path class="xf3py0b3j"/>`,
		"fallback": "ph:martini-fill",
	});
}

export default Component;
