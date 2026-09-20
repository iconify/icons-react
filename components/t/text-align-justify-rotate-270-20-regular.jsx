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
		"content": `<style>.w6ajf4b2b {
  fill: currentColor;
  d: path("M4.5 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5m5 0a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5m4.5-.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0z");
}
</style><path class="w6ajf4b2b"/>`,
		"fallback": "fluent:text-align-justify-rotate-270-20-regular",
	});
}

export default Component;
