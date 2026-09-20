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
		"content": `<style>.ify3sqb3m {
  fill: currentColor;
  d: path("M200 16a8 8 0 0 0-8 8v16h-32V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H64V24a8 8 0 0 0-16 0v208a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0V24a8 8 0 0 0-8-8M64 56h128v144H64Zm64 120a8 8 0 0 0 6.86-3.88l24-40a8 8 0 0 0 0-8.24l-24-40a8 8 0 0 0-13.72 0l-24 40a8 8 0 0 0 0 8.24l24 40A8 8 0 0 0 128 176m0-72.45L142.67 128L128 152.45L113.33 128Z");
}
</style><path class="ify3sqb3m"/>`,
		"fallback": "ph:rug",
	});
}

export default Component;
