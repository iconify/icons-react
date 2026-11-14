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
		"content": `<style>.yzg2f69eg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5zA1.5 1.5 0 0 1 13.5 4v1.5A1.5 1.5 0 0 1 12 7a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 12 2.5M12 7v13.5m-5-5a5 2 0 1 0 10 0a5 2 0 1 0-10 0m-4 5h18");
}
</style><path class="yzg2f69eg"/>`,
		"fallback": "uix:ski-pole-basket",
	});
}

export default Component;
