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
		"content": `<style>.ik9walbjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h2l1 5.5h13l1-5.5h2M12 2.5S8.5 6.75 8.5 9a3.5 3.5 0 0 0 7 0c0-2.25-3.5-6.5-3.5-6.5");
}
</style><path class="ik9walbjh"/>`,
		"fallback": "uix:spill-tray",
	});
}

export default Component;
