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
		"content": `<style>.v0ma7jbih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h15a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2a2 2 0 0 1 2-2M5 7v5m3.5-5v5M12 7v5m3.5-5v5M19 7v5m-3 8a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0m-.25-3.75h.01m2.74-1.5h.01m2.74 1.5h.01");
}
</style><path class="v0ma7jbih"/>`,
		"fallback": "uix:pet-comb",
	});
}

export default Component;
