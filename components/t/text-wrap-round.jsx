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
		"content": `<style>.nfwfa_b7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h16M4 10h13M4 17h4m9-7c4.667 0 4.667 7 0 7h-5m3-3l-3 3l3 3");
}
</style><path class="nfwfa_b7x"/>`,
		"fallback": "coolicons:text-wrap-round",
	});
}

export default Component;
