import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g3a4xmqgs {
  fill: currentColor;
  d: path("M5 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m7 0a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V7h8a1 1 0 1 0 0-2z");
}
</style><path class="g3a4xmqgs"/>`,
		"fallback": "fluent:temperature-degree-fahrenheit-28-filled",
	});
}

export default Component;
