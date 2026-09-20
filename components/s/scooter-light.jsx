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
		"content": `<style>.oy0lzqbtv {
  fill: currentColor;
  d: path("M212 138a34 34 0 0 0-4.89.36L173.69 38.1A6 6 0 0 0 168 34h-32a6 6 0 0 0 0 12h27.68l18.24 54.73L125.16 170H77.94a34 34 0 1 0-1.44 12H128a6 6 0 0 0 4.64-2.2l53.76-65.62l9.33 28A34 34 0 1 0 212 138M44 194a22 22 0 1 1 22-22a22 22 0 0 1-22 22m168 0a22 22 0 1 1 22-22a22 22 0 0 1-22 22");
}
</style><path class="oy0lzqbtv"/>`,
		"fallback": "ph:scooter-light",
	});
}

export default Component;
