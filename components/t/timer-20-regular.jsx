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
		"content": `<style>.jfry00arj {
  fill: currentColor;
  d: path("M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm7.656 1.929a.5.5 0 1 0-.707.707l1.414 1.414a.5.5 0 1 0 .707-.707zM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5m0 12a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-1a6 6 0 1 1 0-12a6 6 0 0 1 0 12");
}
</style><path class="jfry00arj"/>`,
		"fallback": "fluent:timer-20-regular",
	});
}

export default Component;
