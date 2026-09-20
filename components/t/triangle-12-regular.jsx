import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s5qr83b0m {
  fill: currentColor;
  d: path("M5.214 1.459a.903.903 0 0 1 1.572 0l4.092 7.169c.348.61-.089 1.372-.787 1.372H1.91c-.698 0-1.135-.762-.787-1.372zm.786.66L2.083 8.983h7.834z");
}
</style><path class="s5qr83b0m"/>`,
		"fallback": "fluent:triangle-12-regular",
	});
}

export default Component;
