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
		"content": `<style>.hc54lqs6w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.5Q18 9 17.5 3M12 9.5Q6 9 6.5 3M12 9.5L8.25 15M12 9.5l3.75 5.5m-7.594.065za1.5 1.5 0 0 1 .441 2.075l-2.178 3.354a1.5 1.5 0 0 1-2.075.441a1.5 1.5 0 0 1-.441-2.075l2.178-3.354a1.5 1.5 0 0 1 2.075-.441m7.688 0za1.5 1.5 0 0 1 2.075.441l2.178 3.354a1.5 1.5 0 0 1-.441 2.075a1.5 1.5 0 0 1-2.075-.441l-2.178-3.354a1.5 1.5 0 0 1 .441-2.075");
}
</style><path class="hc54lqs6w"/>`,
		"fallback": "uix:loppers",
	});
}

export default Component;
