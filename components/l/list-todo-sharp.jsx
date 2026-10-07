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
		"content": `<style>.wqe7kf98w {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L8 4L8 10L2 10L2 4ZM1.7071 17.7071L4 20L8.2929 15.7071M11 7L23 7M11 18L23 18");
}
</style><path class="wqe7kf98w"/>`,
		"fallback": "keyline-icons:list-todo-sharp",
	});
}

export default Component;
