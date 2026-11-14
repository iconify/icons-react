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
		"content": `<style>.xf4-x3sgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.672 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.558 0 2.982.303 4.161.846M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m2.25-2.25V13.5");
}
</style><path class="xf4-x3sgh"/>`,
		"fallback": "uix:person-nonbinary",
	});
}

export default Component;
