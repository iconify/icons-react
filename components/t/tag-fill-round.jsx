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
		"content": `<style>.le5ojcc3w {
  fill: currentColor;
  d: path("M10 3c1.317 0 2.748.335 3.707 1.293l4 4a5.243 5.243 0 0 1 0 7.414l-2 2a5.243 5.243 0 0 1-7.414 0l-4-4C3.335 12.748 3 11.317 3 10V8a5 5 0 0 1 5-5ZM7.158 8.221a2 2 0 1 0 3.684 1.558A2 2 0 0 0 7.158 8.22");
}
</style><path class="le5ojcc3w"/>`,
		"fallback": "coolicons:tag-fill-round",
	});
}

export default Component;
