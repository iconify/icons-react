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
		"content": `<style>.ds11libzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 15.5h15.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 19.75 19H4.25a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75m-.5-6v6m2.75-6v6m2.75-6v6M12 5v10.5m2.75-6v6m2.75-6v6m2.75-6v6");
}
</style><path class="ds11libzl"/>`,
		"fallback": "uix:kwanzaa-kinara",
	});
}

export default Component;
