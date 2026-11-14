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
		"content": `<style>.ii0mrnh9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3h8v5.5H8Zm.5 17.5l3.5-12l3.5 12M5.25 3q-2.5 3 0 6m13.5-6q2.5 3 0 6");
}
</style><path class="ii0mrnh9f"/>`,
		"fallback": "uix-sharp:tracking-base-station",
	});
}

export default Component;
