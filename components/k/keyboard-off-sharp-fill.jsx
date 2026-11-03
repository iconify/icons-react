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
		"content": `<style>.ahhqo1b4s {
  d: path("M1.7071 1.7071L22.2929 22.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.n-8cu4b4b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21 21L2 21C1.4477 21 1 20.5523 1 20L1 4C1 3.4477 1.4477 3 2 3L3 3L15 15L7 15L7 17L17 17L21 21ZM5 11L5 13L7 13L7 11L5 11ZM6.6569 3L22 3C22.5523 3 23 3.4477 23 4L23 19.3431L6.6569 3ZM13 7L13 9L15 9L15 7L13 7ZM17 7L17 9L19 9L19 7L17 7ZM17 11L17 13L19 13L19 11L17 11Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="n-8cu4b4b"/><path class="ahhqo1b4s"/></g>`,
		"fallback": "keyline-icons:keyboard-off-sharp-fill",
	});
}

export default Component;
