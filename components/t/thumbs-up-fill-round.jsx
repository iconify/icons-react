import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jqapvxbrn {
  fill: currentColor;
  d: path("M8 21.829V8.83A3.01 3.01 0 0 0 10 6V5a3 3 0 1 1 6 0v3a.997.997 0 0 0 1 1h1a4 4 0 0 1 4 4v1q0 .1-.019.196l-1 5c-.087.43-.265.836-.523 1.191C19.675 21.475 18.309 22 17 22H9a3 3 0 0 1-1-.171m-2 0A3 3 0 0 1 2 19v-7a3 3 0 0 1 3-3h1Z");
}
</style><path class="jqapvxbrn"/>`,
		"fallback": "coolicons:thumbs-up-fill-round",
	});
}

export default Component;
