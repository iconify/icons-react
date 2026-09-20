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
		"content": `<style>.jut3zrwiw {
  fill: currentColor;
  d: path("M216 170h-11L183.15 46H192a6 6 0 0 0 0-12H64a6 6 0 0 0 0 12h8.85L51 170H40a6 6 0 0 0 0 12h82v58a6 6 0 0 0 12 0v-58h82a6 6 0 0 0 0-12M85 46h86l21.88 124H63.15Z");
}
</style><path class="jut3zrwiw"/>`,
		"fallback": "ph:push-pin-simple-light",
	});
}

export default Component;
