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
		"content": `<style>.wk7gqw2hw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h19m-17 0V20h15v-7.5M7.75 9.75h8.5m-7.5 0a3.25 3.25 0 0 1 6.5 0M12 6.5V4.25");
}
</style><path class="wk7gqw2hw"/>`,
		"fallback": "uix:reception-desk",
	});
}

export default Component;
