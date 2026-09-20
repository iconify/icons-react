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
		"content": `<style>.pi49_vn6a {
  fill: currentColor;
  d: path("M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0m92 148h-40l38.36-51.15a28 28 0 1 0-48.77-26.18a4 4 0 1 0 7.54 2.66A20.4 20.4 0 0 1 200 124a20 20 0 0 1 32 24l-43.2 57.6a4 4 0 0 0 3.2 6.4h48a4 4 0 0 0 0-8");
}
</style><path class="pi49_vn6a"/>`,
		"fallback": "ph:text-h-two-thin",
	});
}

export default Component;
