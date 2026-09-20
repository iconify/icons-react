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
		"content": `<style>.fdrffh_te {
  d: path("M9 13h5");
}

.ghgpbwtop {
  d: path("M11 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ipg5ngbqc {
  d: path("M7 2v20h10V2Z");
}

.prj9u5frn {
  d: path("M9 10h5");
}
</style><g class="hntgybcog"><path class="ipg5ngbqc"/><path class="ghgpbwtop"/><path class="prj9u5frn"/><path class="fdrffh_te"/></g>`,
		"fallback": "iconmind:remote-control-outline-thin",
	});
}

export default Component;
