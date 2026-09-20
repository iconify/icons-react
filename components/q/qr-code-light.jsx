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
		"content": `<style>.vunw7zbaa {
  fill: currentColor;
  d: path("M104 42H56a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Zm-2 34H56a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Zm94-158h-48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Zm-64 72v-32a6 6 0 0 1 12 0v32a6 6 0 0 1-12 0m76-16a6 6 0 0 1-6 6h-26v42a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h26v-58a6 6 0 0 1 12 0v10h26a6 6 0 0 1 6 6m0 32v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0");
}
</style><path class="vunw7zbaa"/>`,
		"fallback": "ph:qr-code-light",
	});
}

export default Component;
