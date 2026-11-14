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
		"content": `<style>.konkmjbiw {
  d: path("M12.476 19.371a8.5 8.5 0 1 1 6.895-6.895M8.25 9h.01m5.49 0h.01");
}

.mmnk2jbdl {
  d: path("M7.5 13c1.25 2.25 4.5 2.5 6.25.75M18 15v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="konkmjbiw"/><path class="mmnk2jbdl"/></g>`,
		"fallback": "uix-sharp:reaction-add",
	});
}

export default Component;
