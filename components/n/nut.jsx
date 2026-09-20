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
		"content": `<style>.j7aljhb0s {
  d: path("M15.156 16.992A2 2 0 0 1 13.42 18H6.58a2 2 0 0 1-1.736-1.008l-3.429-6a2 2 0 0 1 0-1.984l3.429-6A2 2 0 0 1 6.58 2h6.84a2 2 0 0 1 1.736 1.008l3.429 6a2 2 0 0 1 0 1.984zM6.58 16h6.84l3.428-6l-3.428-6H6.58l-3.428 6z");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.r8jnfbb0b {
  d: path("M10 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="j7aljhb0s"/><path class="r8jnfbb0b"/></g>`,
		"fallback": "pepicons-pop:nut",
	});
}

export default Component;
