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
		"content": `<style>.xm5_6-bcb {
  fill: currentColor;
  d: path("M4.5 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm5.5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm6.5 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0ZM5 14.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0v12Zm5 .5a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-1 0v12a.5.5 0 0 0 .5.5Zm6-.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0v12Z");
}
</style><path class="xm5_6-bcb"/>`,
		"fallback": "fluent:text-bullet-list-rotate-270-20-regular",
	});
}

export default Component;
