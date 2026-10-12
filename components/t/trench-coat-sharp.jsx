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
		"content": `<style>.i-0w4kbvn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.9 13.25h14.2M12 16v5");
}

.s21nvjoxi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 10.25h.01m3.99 0h.01");
}

.s6zk_ebcm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3.25L12 8l3.25-4.75");
}

.sk-esxbfq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h5.5l1.3.74l.9.52l1.3.74l.07 1.5l.61 13.5l.07 1.5H4.25l.07-1.5l.61-13.5l.07-1.5l1.3-.74l.9-.52l1.3-.74z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="sk-esxbfq"/><path class="s6zk_ebcm"/><path class="s21nvjoxi"/><path class="i-0w4kbvn"/></g>`,
		"fallback": "iconoven:trench-coat-sharp",
	});
}

export default Component;
