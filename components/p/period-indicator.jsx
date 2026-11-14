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
		"content": `<style>.jd6u9abmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.563 3.137a9 9 0 0 1 7.3 7.3m0 3.126a9 9 0 0 1-7.3 7.3m-3.126 0a9 9 0 0 1-7.3-7.3m0-3.126a9 9 0 0 1 7.3-7.3M12 12h.01");
}
</style><path class="jd6u9abmd"/>`,
		"fallback": "uix:period-indicator",
	});
}

export default Component;
