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
		"content": `<style>.fl8afgbik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.625 13h4.75A2.625 2.625 0 0 1 17 15.625v2.75A2.625 2.625 0 0 1 14.375 21h-4.75A2.625 2.625 0 0 1 7 18.375v-2.75A2.625 2.625 0 0 1 9.625 13M2.5 21h19M12 10V3M9 6l3-3l3 3");
}
</style><path class="fl8afgbik"/>`,
		"fallback": "uix:normal-force",
	});
}

export default Component;
