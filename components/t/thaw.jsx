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
		"content": `<style>.gq6lm7bqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.25v9.5m4.11-7.12l-8.22 4.75m8.22 0L3.89 5.63m12.08 2.76l-3.48 6.63a4.25 4.25 0 1 0 7.52 0l-3.48-6.63q-.28-.53-.56 0");
}
</style><path class="gq6lm7bqc"/>`,
		"fallback": "iconoven:thaw",
	});
}

export default Component;
