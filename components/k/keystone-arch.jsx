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
		"content": `<style>.cj20qdd7a {
  d: path("M2.75 21.25V12a9.25 9.25 0 0 1 18.5 0v9.25h-4.5V12a4.75 4.75 0 0 0-9.5 0v9.25ZM8.64 8.64L5.46 5.46m9.9 3.18l3.18-3.18M2.75 12h4.5m9.5 0h4.5");
}

.g4-36mi1e {
  d: path("M10.25 2.75h3.5q.5 0 .39.49l-.78 3.52q-.11.49-.61.49h-1.5q-.5 0-.61-.49l-.78-3.52q-.11-.49.39-.49");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cj20qdd7a"/><path class="g4-36mi1e"/></g>`,
		"fallback": "iconoven:keystone-arch",
	});
}

export default Component;
