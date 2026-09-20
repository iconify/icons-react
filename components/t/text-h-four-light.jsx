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
		"content": `<style>.fm--4d9cv {
  fill: currentColor;
  d: path("M150 56v120a6 6 0 0 1-12 0v-54H46v54a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v54h92V56a6 6 0 0 1 12 0m104 128a6 6 0 0 1-6 6h-10v18a6 6 0 0 1-12 0v-18h-50a6 6 0 0 1-4.74-9.68l56-72A6 6 0 0 1 238 112v66h10a6 6 0 0 1 6 6m-28-54.51L188.27 178H226Z");
}
</style><path class="fm--4d9cv"/>`,
		"fallback": "ph:text-h-four-light",
	});
}

export default Component;
