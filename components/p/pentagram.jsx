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
		"content": `<style>.rmvjqmbzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l2.18 6.7H9.82Zm9.23 6.7l-5.71 4.15l-1.34-4.15ZM17.7 20.3L12 16.16l3.52-2.56Zm-11.4 0l2.18-6.7L12 16.16ZM2.77 9.45h7.05L8.48 13.6Z");
}
</style><path class="rmvjqmbzl"/>`,
		"fallback": "iconoven:pentagram",
	});
}

export default Component;
