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
		"content": `<style>.yizktvb6m {
  fill: currentColor;
  d: path("M5 4v2h14V4zm0 10h4v6h6v-6h4l-7-7z");
}
</style><path class="yizktvb6m"/>`,
		"fallback": "ic:publish",
	});
}

export default Component;
