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
		"content": `<style>.vjzcvqebt {
  fill: currentColor;
  d: path("M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zM6 7h8a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2");
}
</style><path class="vjzcvqebt"/>`,
		"fallback": "fluent:slide-text-title-20-filled",
	});
}

export default Component;
