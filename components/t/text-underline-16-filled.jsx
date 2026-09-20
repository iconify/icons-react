import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.by7j-ezcx {
  fill: currentColor;
  d: path("M4 13.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M4.75 2a.75.75 0 0 1 .75.75V8a2.5 2.5 0 1 0 5 0V2.75a.75.75 0 0 1 1.5 0V8a4 4 0 1 1-8 0V2.75A.75.75 0 0 1 4.75 2");
}
</style><path class="by7j-ezcx"/>`,
		"fallback": "fluent:text-underline-16-filled",
	});
}

export default Component;
