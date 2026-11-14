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
		"content": `<style>.p4p7yz86j {
  d: path("M2.5 2.5h19v19h-19Zm0 6.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xkle0icxz {
  d: path("m5.5 5l1.25 1.5L8 5m3 .75h7M6.5 9v8m0-4H9m-2.5 4H9m2.5-4H18m-6.5 4H16");
}
</style><g class="ulnmmdpxh"><path class="p4p7yz86j"/><path class="xkle0icxz"/></g>`,
		"fallback": "uix-sharp:table-group-by",
	});
}

export default Component;
