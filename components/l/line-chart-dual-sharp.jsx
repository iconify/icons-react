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
		"content": `<style>.jq6edmbev {
  d: path("M7.75 16.5L11.5 13l3 2l5-4.5m-11.75 0l3.75-3l3 2.5l5-4.5");
}

.vf_31rbpy {
  d: path("M3.75 3.75v16.5h16.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vf_31rbpy"/><path class="jq6edmbev"/></g>`,
		"fallback": "iconoven:line-chart-dual-sharp",
	});
}

export default Component;
