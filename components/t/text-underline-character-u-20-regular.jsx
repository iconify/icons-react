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
		"content": `<style>.f0bdybb0z {
  fill: currentColor;
  d: path("M7 3.5a.5.5 0 0 0-1 0V10a4 4 0 0 0 8 0V3.5a.5.5 0 0 0-1 0V10a3 3 0 1 1-6 0zM5.5 16a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z");
}
</style><path class="f0bdybb0z"/>`,
		"fallback": "fluent:text-underline-character-u-20-regular",
	});
}

export default Component;
