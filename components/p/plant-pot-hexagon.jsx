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
		"content": `<style>.q4s6hlj5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.37 11h9.26a1.5 1.5 0 0 1 1.302.756l2.143 3.75a1.5 1.5 0 0 1 0 1.488l-2.143 3.75a1.5 1.5 0 0 1-1.302.756H7.37a1.5 1.5 0 0 1-1.302-.756l-2.143-3.75a1.5 1.5 0 0 1 0-1.488l2.143-3.75A1.5 1.5 0 0 1 7.37 11M12 11V8c-.25-3-2.25-5-5.25-5C6.75 6 9 8 12 8c.25-3.25 2.25-5.5 5.25-5.5c0 3-2 5.5-5.25 5.5");
}
</style><path class="q4s6hlj5m"/>`,
		"fallback": "uix:plant-pot-hexagon",
	});
}

export default Component;
