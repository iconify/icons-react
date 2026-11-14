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
		"content": `<style>.vfjlip0mo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19h5C9.5 19 10 9 12 9s2.5 10 4.5 10h5M12 5.5h.01");
}
</style><path class="vfjlip0mo"/>`,
		"fallback": "uix:signal-pulse",
	});
}

export default Component;
