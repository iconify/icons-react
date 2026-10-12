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
		"content": `<style>.frdod_ufe {
  d: path("M5 19.25v-8a7 7 0 0 1 14 0v8Zm-1.75 0h17.5M7 19.25v2m10-2v2");
}

.k-swvabop {
  d: path("M12 9.25v2l1.25.75");
}

.p5v-oc_9l {
  cx: 12px;
  cy: 11.25px;
  r: 3.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="frdod_ufe"/><circle class="p5v-oc_9l"/><path class="k-swvabop"/></g>`,
		"fallback": "iconoven:mantel-clock-sharp",
	});
}

export default Component;
