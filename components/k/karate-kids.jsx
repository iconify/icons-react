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
		"content": `<style>.zk8v2lbrc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5zA2.5 2.5 0 0 1 14.5 6v2a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 8V6A2.5 2.5 0 0 1 12 3.5M9.5 5h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6m5-4h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6M11 10.5L7.5 20l3 1l1.5-5.5l1.5 3l3-1l-3.5-7");
}
</style><path class="zk8v2lbrc"/>`,
		"fallback": "uix:karate-kids",
	});
}

export default Component;
