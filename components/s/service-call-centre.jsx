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
		"content": `<style>.p5j60obxu {
  d: path("M3 13h4v6H3Zm14 0h4v6h-4Zm2 6c0 2-2 2.5-5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yde3gobvh {
  d: path("M4.5 14v-2a7.5 7.5 0 0 1 15 0v2");
}
</style><g class="ulnmmdpxh"><path class="yde3gobvh"/><path class="p5j60obxu"/></g>`,
		"fallback": "uix-sharp:service-call-centre",
	});
}

export default Component;
