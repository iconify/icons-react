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
		"content": `<style>.klbwgabja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 18C22 11.6487 16.8513 6.5 10.5 6.5C7.45 6.5 4.5249 7.7116 2.3683 9.8683M2 6L2 9.7365C2 10.0127 2.2239 10.2365 2.5 10.2365L6.2365 10.2365");
}
</style><path class="klbwgabja"/>`,
		"fallback": "keyline-icons:undo-duotone",
	});
}

export default Component;
