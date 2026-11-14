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
		"content": `<style>.iz-cakr7o {
  d: path("M4 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm13 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.oelioormc {
  d: path("M12 3.5V6m-5.5 5.5a5.5 5.5 0 0 1 11 0M3 11.5h18m-15.5 0v7h13v-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oelioormc"/><path class="iz-cakr7o"/></g>`,
		"fallback": "uix-sharp:room-service-cart",
	});
}

export default Component;
