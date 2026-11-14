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
		"content": `<style>.guxb9khka {
  d: path("m8.5 17.5l3-3h8m-14 4h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jhhn9_qdp {
  d: path("M13.25 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M11.5 21.5V14a4 4 0 0 1 8 0v7.5m-14.375-6h.75A2.625 2.625 0 0 1 8.5 18.125v.75A2.625 2.625 0 0 1 5.875 21.5h-.75A2.625 2.625 0 0 1 2.5 18.875v-.75A2.625 2.625 0 0 1 5.125 15.5");
}
</style><g class="hntgybcog"><path class="jhhn9_qdp"/><path class="guxb9khka"/></g>`,
		"fallback": "uix:tape-measure-body",
	});
}

export default Component;
