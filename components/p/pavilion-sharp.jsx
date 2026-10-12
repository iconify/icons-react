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
		"content": `<style>.zy7fsfbhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.6 3.25H15l.4.45l2.7 3.1l.4.45l.59.11l1.57.28l.59.11l-.24.55l-.27.65l-.24.55h-17l-.24-.55l-.27-.65l-.24-.55l.59-.11l1.57-.28l.59-.11l.4-.45l2.7-3.1l.4-.45zM6 9.5v9m12-9v9m-8.25-9V12m4.5-2.5V12m-11.5 6.5h18.5v2.75H2.75z");
}
</style><path class="zy7fsfbhj"/>`,
		"fallback": "iconoven:pavilion-sharp",
	});
}

export default Component;
