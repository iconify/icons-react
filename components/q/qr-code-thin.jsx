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
		"content": `<style>.k2jk3vliz {
  fill: currentColor;
  d: path("M104 44H56a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm-4 36H56a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm92-156h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm-64 72v-32a4 4 0 0 1 8 0v32a4 4 0 0 1-8 0m72-16a4 4 0 0 1-4 4h-28v44a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h28v-60a4 4 0 0 1 8 0v12h28a4 4 0 0 1 4 4m0 32v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0");
}
</style><path class="k2jk3vliz"/>`,
		"fallback": "ph:qr-code-thin",
	});
}

export default Component;
