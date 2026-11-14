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
		"content": `<style>.o6gyx5b6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h11v6H3Zm8 6l5 8h3l-5-8M8.5 3v6m9 8l2.25 3.75");
}
</style><path class="o6gyx5b6b"/>`,
		"fallback": "uix-sharp:tattoo-machine",
	});
}

export default Component;
