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
		"content": `<style>.c7y8r2ibv {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vhc03isln {
  d: path("M2.5 16.5V10H14l4 3h3.5v3.5ZM8 10V6.5h7");
}
</style><g class="ulnmmdpxh"><path class="c7y8r2ibv"/><path class="vhc03isln"/></g>`,
		"fallback": "uix-sharp:safari-jeep",
	});
}

export default Component;
