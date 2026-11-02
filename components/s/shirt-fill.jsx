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
		"content": `<style>.d5yzy96xo {
  fill: currentColor;
  d: path("M14.988 3H15q.192 0 .371.072l5 2C21.177 5.394 22 6.056 22 7v3a2 2 0 0 1-2 2h-1v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6H4a2 2 0 0 1-2-2V7c0-.944.823-1.606 1.629-1.928l4.999-2A1 1 0 0 1 10 4a2 2 0 1 0 4 0a1 1 0 0 1 .988-1");
}
</style><path class="d5yzy96xo"/>`,
		"fallback": "coolicons:shirt-fill",
	});
}

export default Component;
