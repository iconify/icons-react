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
		"content": `<style>.hnvnn0bgl {
  d: path("m12 2.75l7.5 2.75v6c0 4.7-3.1 8-7.5 9.75c-4.4-1.75-7.5-5.05-7.5-9.75v-6Z");
}

.kzckph83w {
  d: path("M12 8c.5 0 .75.5.75 1v2L16 13v1l-3.25-1v2.25l1 .75v.75l-1.75-.5l-1.75.5V16l1-.75V13L8 14v-1l3.25-2V9c0-.5.25-1 .75-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hnvnn0bgl"/><path class="kzckph83w"/></g>`,
		"fallback": "uix-sharp:travel-shield",
	});
}

export default Component;
