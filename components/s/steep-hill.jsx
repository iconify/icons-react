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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l1mthztqi {
  d: path("m12.98 4.99l7.29 13.02q.98 1.74-1.02 1.74H4.75q-2 0-1.02-1.74l7.29-13.02q.98-1.74 1.96 0");
}

.mc06e9bns {
  d: path("M8.5 17h4.75q.75 0 .75-.75V13.5q0-.75-.62-.33l-5.01 3.41q-.62.42.13.42");
}
</style><g class="hntgybcog"><path class="l1mthztqi"/><path class="mc06e9bns"/></g>`,
		"fallback": "iconoven:steep-hill",
	});
}

export default Component;
