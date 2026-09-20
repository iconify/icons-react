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
		"content": `<style>.mwbgifbqf {
  fill: currentColor;
  d: path("M7.75 17.25a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0zm3 0a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0z");
}
</style><path class="mwbgifbqf"/>`,
		"fallback": "fluent:re-order-vertical-20-filled",
	});
}

export default Component;
