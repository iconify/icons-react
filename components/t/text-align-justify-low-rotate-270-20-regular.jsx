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
		"content": `<style>.dtn3bvb9s {
  fill: currentColor;
  d: path("M4.5 11a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5m5 0a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5m4.5 6.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0z");
}
</style><path class="dtn3bvb9s"/>`,
		"fallback": "fluent:text-align-justify-low-rotate-270-20-regular",
	});
}

export default Component;
