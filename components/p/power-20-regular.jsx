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
		"content": `<style>.dyw09yb_u {
  fill: currentColor;
  d: path("M10.5 2.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0zM13.743 4a.5.5 0 1 0-.499.867a6.5 6.5 0 1 1-6.494.004a.5.5 0 1 0-.5-.866A7.5 7.5 0 1 0 13.743 4");
}
</style><path class="dyw09yb_u"/>`,
		"fallback": "fluent:power-20-regular",
	});
}

export default Component;
