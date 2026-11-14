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
		"content": `<style>.in-jinb9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10.5v11m-6.5-8h13M3 13.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m13 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-8.5-11l9 5m0-5l-9 5");
}
</style><path class="in-jinb9f"/>`,
		"fallback": "uix:level-crossing-lights",
	});
}

export default Component;
