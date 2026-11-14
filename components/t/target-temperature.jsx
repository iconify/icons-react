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
		"content": `<style>.nyzz-rbft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 13.75V5.5a2.75 2.75 0 0 1 5.5 0v8.25a4.5 4.5 0 1 1-5.5 0Zm2.75 3.5V11m7.25 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5 0h.01");
}
</style><path class="nyzz-rbft"/>`,
		"fallback": "uix-sharp:target-temperature",
	});
}

export default Component;
