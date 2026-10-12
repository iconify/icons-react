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
		"content": `<style>.hrivag5vo {
  cx: 15.5px;
  cy: 10.75px;
  r: 1.25px;
}

.iya1fi4bg {
  d: path("m16 12l1.75 9.25m-2-11.75l2.4-4.4");
}

.ms4tis_-w {
  d: path("M12.5 9.25L2.75 5m9.75 7.25L2.75 16.5");
}

.t64h55u3e {
  cx: 18.75px;
  cy: 4px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ms4tis_-w"/><circle class="hrivag5vo"/><path class="iya1fi4bg"/><circle class="t64h55u3e"/></g>`,
		"fallback": "iconoven:speculum-sharp",
	});
}

export default Component;
