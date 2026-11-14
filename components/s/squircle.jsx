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
		"content": `<style>.u_f8ibc-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c8.5 0 9.5 1 9.5 9.5s-1 9.5-9.5 9.5s-9.5-1-9.5-9.5s1-9.5 9.5-9.5");
}
</style><path class="u_f8ibc-p"/>`,
		"fallback": "uix:squircle",
	});
}

export default Component;
