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
		"content": `<style>.mr4yxudbo {
  fill: currentColor;
  d: path("M2.75 1.999a.75.75 0 0 0 0 1.5H10a6.503 6.503 0 0 1 3.466 12h2.344A8 8 0 0 0 10 2zm5.598 15.83A8.003 8.003 0 0 1 4.19 4.498h2.344A6.5 6.5 0 0 0 3.5 10a6.47 6.47 0 0 0 1.391 4.02A6.49 6.49 0 0 0 10 16.499h7.25a.75.75 0 0 1 0 1.5H10a8 8 0 0 1-1.652-.17M10 7a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 10 7");
}
</style><path class="mr4yxudbo"/>`,
		"fallback": "fluent:remix-add-20-filled",
	});
}

export default Component;
