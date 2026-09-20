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
		"content": `<style>.a50yxlbpa {
  fill: currentColor;
  d: path("M164 104a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28H96a4 4 0 0 1 0-8h28V72a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4m48 0c0 30.42-14.17 62.79-41 93.62a250 250 0 0 1-40.73 37.66a4 4 0 0 1-4.58 0A250 250 0 0 1 85 197.62c-26.83-30.83-41-63.2-41-93.62a84 84 0 0 1 168 0m-8 0a76 76 0 0 0-152 0c0 35.9 21.15 67.8 38.9 88.23A254.6 254.6 0 0 0 128 227a254.6 254.6 0 0 0 37.1-34.81C182.85 171.8 204 139.9 204 104");
}
</style><path class="a50yxlbpa"/>`,
		"fallback": "ph:map-pin-plus-thin",
	});
}

export default Component;
