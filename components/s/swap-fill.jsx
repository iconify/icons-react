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
		"content": `<style>.yq6m008_h {
  fill: currentColor;
  d: path("M224 48v104a16 16 0 0 1-16 16h-96v16a8 8 0 0 1-13.66 5.66l-24-24a8 8 0 0 1 0-11.32l24-24A8 8 0 0 1 112 136v16h96V48H96v8a8 8 0 0 1-16 0v-8a16 16 0 0 1 16-16h112a16 16 0 0 1 16 16m-56 144a8 8 0 0 0-8 8v8H48V104h96v16a8 8 0 0 0 13.66 5.66l24-24a8 8 0 0 0 0-11.32l-24-24A8 8 0 0 0 144 72v16H48a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-8a8 8 0 0 0-8-8");
}
</style><path class="yq6m008_h"/>`,
		"fallback": "ph:swap-fill",
	});
}

export default Component;
