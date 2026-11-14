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
		"content": `<style>.jspei97hq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.682 12.5h8.636a1.75 1.75 0 0 1 1.709 2.13l-1.222 5.5a1.75 1.75 0 0 1-1.709 1.37H8.904a1.75 1.75 0 0 1-1.709-1.37l-1.222-5.5a1.75 1.75 0 0 1 1.709-2.13M6 15.5h12m-6-3v-8M12 9c0-3.5-2.5-6-6.5-6C5.5 6.5 8 9 12 9m0 0c0-3.5 2.5-6 6.5-6c0 3.5-2.5 6-6.5 6");
}
</style><path class="jspei97hq"/>`,
		"fallback": "uix:pin-garden-centre",
	});
}

export default Component;
