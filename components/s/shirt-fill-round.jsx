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
		"content": `<style>.f-d-hbipu {
  fill: currentColor;
  d: path("M14.988 3H15q.192 0 .371.072l5 2C21.177 5.394 22 6.056 22 7v3a2 2 0 0 1-2 2h-1v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 14 21h-4a5 5 0 0 1-5-5v-4H4a2 2 0 0 1-2-2V7c0-.944.823-1.606 1.629-1.928l4.999-2A1 1 0 0 1 10 4a2 2 0 1 0 4 0a1 1 0 0 1 .988-1");
}
</style><path class="f-d-hbipu"/>`,
		"fallback": "coolicons:shirt-fill-round",
	});
}

export default Component;
