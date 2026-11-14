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
		"content": `<style>.f18_f1p2j {
  d: path("M5.5 2.5h13v19h-13Z");
}

.mx1-zgbkf {
  d: path("M9 8h6v8H9Zm0 4h6m-3-6.75h.01M12 18.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f18_f1p2j"/><path class="mx1-zgbkf"/></g>`,
		"fallback": "uix-sharp:light-switch-plate",
	});
}

export default Component;
