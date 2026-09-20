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
		"content": `<style>.orkyf7bed {
  fill: currentColor;
  d: path("M15 4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM8.665 7.028a.5.5 0 0 0-.637.307L6.5 11.699L4.972 7.335a.5.5 0 1 0-.944.33l1.667 4.765a.853.853 0 0 0 1.61 0l1.667-4.765a.5.5 0 0 0-.307-.637M10.5 7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5m2 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V11h1a2 2 0 1 0 0-4zM14 8a1 1 0 1 1 0 2h-1V8z");
}
</style><path class="orkyf7bed"/>`,
		"fallback": "fluent:vip-20-filled",
	});
}

export default Component;
