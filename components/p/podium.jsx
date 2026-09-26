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
		"content": `<style>.i0mgzh53n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 17.25H22M4 17.25V13.75H9V10.25H14V6.75H20V17.25H4Z");
}
</style><path class="i0mgzh53n"/>`,
		"fallback": "keyline-icons:podium",
	});
}

export default Component;
