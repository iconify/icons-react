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
		"content": `<style>.zyyrqpbvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 5L13 5C13.5523 5 14 5.4477 14 6L14 8C14 8.5523 13.5523 9 13 9L11 9C10.4477 9 10 8.5523 10 8L10 6C10 5.4477 10.4477 5 11 5ZM10 8L2 19M14 8L22 19");
}
</style><path class="zyyrqpbvp"/>`,
		"fallback": "keyline-icons:vector-corner",
	});
}

export default Component;
