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
		"content": `<style>.f5qodgb2v {
  d: path("m2.739 13.73l3.612-5.405a1.75 1.75 0 0 1 2.427-.482a1.75 1.75 0 0 1 .483 2.427l-3.612 5.405a1.75 1.75 0 0 1-2.427.482a1.75 1.75 0 0 1-.483-2.427");
}

.fv1uhpbyq {
  d: path("m10.739 13.73l3.612-5.405a1.75 1.75 0 0 1 2.427-.482a1.75 1.75 0 0 1 .483 2.427l-3.612 5.405a1.75 1.75 0 0 1-2.427.482a1.75 1.75 0 0 1-.483-2.427");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ooua5kb7v {
  d: path("m17.649 8.325l3.612 5.405a1.75 1.75 0 0 1-.483 2.427a1.75 1.75 0 0 1-2.427-.482l-3.612-5.405a1.75 1.75 0 0 1 .483-2.427a1.75 1.75 0 0 1 2.427.482");
}

.tfuperbnz {
  d: path("m9.649 8.325l3.612 5.405a1.75 1.75 0 0 1-.483 2.427a1.75 1.75 0 0 1-2.427-.482L6.739 10.27a1.75 1.75 0 0 1 .483-2.427a1.75 1.75 0 0 1 2.427.482");
}
</style><g class="hntgybcog"><path class="f5qodgb2v"/><path class="tfuperbnz"/><path class="fv1uhpbyq"/><path class="ooua5kb7v"/></g>`,
		"fallback": "uix:polymer-chemistry",
	});
}

export default Component;
