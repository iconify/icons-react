import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eacs1ubqs {
  fill: currentColor;
  d: path("M10 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M5 10a5 5 0 1 1 10 0a5 5 0 0 1-10 0m5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-8 4a8 8 0 1 1 16 0a8 8 0 0 1-16 0m8-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14");
}
</style><path class="eacs1ubqs"/>`,
		"fallback": "fluent:target-20-regular",
	});
}

export default Component;
