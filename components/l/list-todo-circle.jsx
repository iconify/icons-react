import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o_j8q2bko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 7C8 8.6569 6.6569 10 5 10C3.3431 10 2 8.6569 2 7C2 5.3431 3.3431 4 5 4C6.6569 4 8 5.3431 8 7ZM8 17C8 18.6569 6.6569 20 5 20C3.3431 20 2 18.6569 2 17C2 15.3431 3.3431 14 5 14C6.6569 14 8 15.3431 8 17ZM12 7L22 7M12 17L22 17");
}
</style><path class="o_j8q2bko"/>`,
		"fallback": "keyline-icons:list-todo-circle",
	});
}

export default Component;
