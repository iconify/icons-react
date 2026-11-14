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
		"content": `<style>.ghyflyb-z {
  d: path("M8 10a4 4 0 0 1 8 0m-9.5 0h3v3.5h-3Zm8 0h3v3.5h-3Zm.25 8l2 2L21 15.75");
}

.rj0hswbxy {
  d: path("M10.8 18H2.5V3h19v9.3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rj0hswbxy"/><path class="ghyflyb-z"/></g>`,
		"fallback": "uix-sharp:radio-station-check",
	});
}

export default Component;
