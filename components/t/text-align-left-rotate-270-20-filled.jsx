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
		"content": `<style>.l9kyzcblv {
  fill: currentColor;
  d: path("M4.25 18a.75.75 0 0 1-.75-.75V6.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-.75.75m5 0a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-.75.75m4.25-.75a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0z");
}
</style><path class="l9kyzcblv"/>`,
		"fallback": "fluent:text-align-left-rotate-270-20-filled",
	});
}

export default Component;
