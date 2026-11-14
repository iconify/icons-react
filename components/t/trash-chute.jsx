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
		"content": `<style>.aa2j03bjz {
  d: path("M6.671 13h10.658a1.5 1.5 0 0 0 1.455-1.136l.75-3A1.5 1.5 0 0 0 18.079 7H5.921a1.5 1.5 0 0 0-1.455 1.864l.75 3A1.5 1.5 0 0 0 6.671 13M10 9.75h4m-2 5.75V21m-2.5-2.5L12 21l2.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pqmlflpim {
  d: path("M7.25 4h9.5a1.75 1.75 0 0 1 1.75 1.75v5.5A1.75 1.75 0 0 1 16.75 13h-9.5a1.75 1.75 0 0 1-1.75-1.75v-5.5A1.75 1.75 0 0 1 7.25 4");
}
</style><g class="hntgybcog"><path class="pqmlflpim"/><path class="aa2j03bjz"/></g>`,
		"fallback": "uix:trash-chute",
	});
}

export default Component;
