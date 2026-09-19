import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c6j4q5bhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.5 12l6.749-7.5h-19.5c-9 0-15 11.25-9.75 18C12 18 18 12 21 12zm-21 24l-6.749 7.5H26.25c9 0 14.999-11.25 9.75-18C36 30 30 36 27 36z");
}

.f7wqasbkf {
  cx: 24px;
  cy: 24px;
  r: 9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="c6j4q5bhh"/><circle class="f7wqasbkf"/>`,
		"fallback": "arcticons:scotiabank",
	});
}

export default Component;
