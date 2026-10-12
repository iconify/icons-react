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
		"content": `<style>.lygk6dbzl {
  cx: 16.5px;
  cy: 7.5px;
  r: 3px;
}

.o22ei45em {
  cx: 7.5px;
  cy: 7.5px;
  r: 3px;
}

.rvgwq1bxd {
  d: path("m15 16.6l1 1l2-2.2");
}

.v_866gg1g {
  cx: 7.5px;
  cy: 16.5px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7ey_acuf {
  cx: 16.5px;
  cy: 16.5px;
  r: 3.5px;
}
</style><g class="x2cwu0gfd"><circle class="o22ei45em"/><circle class="lygk6dbzl"/><circle class="v_866gg1g"/><circle class="z7ey_acuf"/><path class="rvgwq1bxd"/></g>`,
		"fallback": "iconoven:variant-picker-sharp",
	});
}

export default Component;
