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
		"content": `<style>.snqeu6faj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 8.25V18.5a2.5 2.5 0 0 1-2.5 2.5h-1.5a2.5 2.5 0 0 1-2.5-2.5v-1.75c0-4.5 2.15-9 4.5-10.4c1-.6 2 .25 2 1.4Zm5.5 0V18.5a2.5 2.5 0 0 0 2.5 2.5h1.5a2.5 2.5 0 0 0 2.5-2.5v-1.75c0-4.5-2.15-9-4.5-10.4c-1-.6-2 .25-2 1.4ZM12 2.75v7.5c0 1.5-.9 2.5-2.75 3m2.75-3c0 1.5.9 2.5 2.75 3");
}
</style><path class="snqeu6faj"/>`,
		"fallback": "iconoven:lungs",
	});
}

export default Component;
