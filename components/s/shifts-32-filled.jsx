import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g03ozac8g {
  fill: currentColor;
  d: path("M4 9a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zm12.006 0a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-5z");
}
</style><path class="g03ozac8g"/>`,
		"fallback": "fluent:shifts-32-filled",
	});
}

export default Component;
