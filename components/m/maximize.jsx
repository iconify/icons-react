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
		"content": `<style>.ianmb7bxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3H6C4.34315 3 3 4.34315 3 6V9M15 3H18C19.65685 3 21 4.34315 21 6V9M21 15V18C21 19.65685 19.65685 21 18 21H15M3 15V18C3 19.65685 4.34315 21 6 21H9");
}
</style><path class="ianmb7bxh"/>`,
		"fallback": "keyline-icons:maximize",
	});
}

export default Component;
