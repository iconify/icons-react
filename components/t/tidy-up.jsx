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
		"content": `<style>.alxzb5hyy {
  d: path("M4.75 7.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM14 4.5h5.5v6H14Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vofk7wb4e {
  d: path("M2.5 10.5h19m-2 0l-2 9.5h-11l-2-9.5");
}
</style><g class="ulnmmdpxh"><path class="vofk7wb4e"/><path class="alxzb5hyy"/></g>`,
		"fallback": "uix-sharp:tidy-up",
	});
}

export default Component;
