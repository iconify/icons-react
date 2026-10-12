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

.ievofsf6m {
  d: path("m8.37 17.26l1.01-6.52q.12-.74.87-.74h3.5q.75 0 .87.74l1.01 6.52q.12.74-.63.74H9q-.75 0-.63-.74m.45-2.76l6.06-2");
}

.uhcln7btt {
  width: 4.5px;
  height: 4.5px;
  x: 9.75px;
  y: 5.5px;
  rx: 0.75px;
}

.wa_x_6bop {
  d: path("M8.75 10h6.5M12 3v2.5m4.5 1L20.75 5M16.5 8.75l4.25 1.5M7.5 6.5L3.25 5M7.5 8.75l-4.25 1.5m-.5 11c1.25 0 1.25-.75 2.5-.75s1.25.75 2.5.75s1.25-.75 2.5-.75s1.25.75 2.5.75s1.25-.75 2.5-.75s1.25.75 2.5.75s1.25-.75 2.5-.75");
}
</style><g class="hntgybcog"><path class="ievofsf6m"/><rect class="uhcln7btt"/><path class="wa_x_6bop"/></g>`,
		"fallback": "iconoven:lighthouse-marine",
	});
}

export default Component;
