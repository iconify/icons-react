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
		"content": `<style>.yg7sipktk {
  fill: currentColor;
  d: path("M15.5 9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5m-5 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5M6 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0z");
}
</style><path class="yg7sipktk"/>`,
		"fallback": "fluent:text-align-justify-low-rotate-90-20-regular",
	});
}

export default Component;
