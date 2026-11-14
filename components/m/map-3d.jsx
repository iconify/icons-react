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
		"content": `<style>.zwi2d84xl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.306 5.678l2.271-.909a1.75 1.75 0 0 1 1.339.017l2.168.928a1.75 1.75 0 0 0 1.339.017l1.295-.518a1.75 1.75 0 0 1 2.327 1.128l3.002 10.129a1.75 1.75 0 0 1-1.028 2.122l-4.132 1.653a1.75 1.75 0 0 1-1.278.009l-5.218-2.008a1.75 1.75 0 0 0-1.278.009l-2.488.995a1.67 1.67 0 0 1-2.23-1.995L6.269 6.837a1.75 1.75 0 0 1 1.037-1.159M10.25 4.5L8.75 18m5-12l1.5 14.5");
}
</style><path class="zwi2d84xl"/>`,
		"fallback": "uix:map-3d",
	});
}

export default Component;
