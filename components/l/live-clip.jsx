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
		"content": `<style>.br3ay8boo {
  d: path("m9.75 6.5l5 2.75l-5 2.75ZM14 20.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-2.5-1L19.75 13m-.25 6.25L16.25 13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.utvjyfbuz {
  d: path("M14.4 15.5H2.5V3h19v7.8");
}
</style><g class="ulnmmdpxh"><path class="utvjyfbuz"/><path class="br3ay8boo"/></g>`,
		"fallback": "uix-sharp:live-clip",
	});
}

export default Component;
