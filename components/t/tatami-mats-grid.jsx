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
		"content": `<style>.upbdwjbye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h12.75A2.625 2.625 0 0 1 21 5.625v12.75A2.625 2.625 0 0 1 18.375 21H5.625A2.625 2.625 0 0 1 3 18.375V5.625A2.625 2.625 0 0 1 5.625 3M12 3v18m-9-9h18M3 6h9m0 12h9");
}
</style><path class="upbdwjbye"/>`,
		"fallback": "uix:tatami-mats-grid",
	});
}

export default Component;
