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
		"content": `<style>.sd6wdsdpf {
  cx: 8.75px;
  cy: 14.5px;
  r: 6px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe5njdbqo {
  d: path("M2.95 16h11.6M13 10.25c1.5-4.75 3.75-6.5 5.25-4.5l3 7.25");
}
</style><g class="x2cwu0gfd"><circle class="sd6wdsdpf"/><path class="xe5njdbqo"/></g>`,
		"fallback": "iconoven:retort-sharp",
	});
}

export default Component;
