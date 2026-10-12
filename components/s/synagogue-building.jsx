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

.ldrfxdurj {
  d: path("m12.15 7.31l.48.84q.15.26.45.26l.96-.01q.3 0 .15.26l-.49.83q-.15.26 0 .52l.49.83q.15.26-.15.26l-.96-.01q-.3 0-.45.26l-.48.84q-.15.26-.3 0l-.48-.84q-.15-.26-.45-.26l-.96.01q-.3 0-.15-.26l.49-.83q.15-.26 0-.52l-.49-.83q-.15-.26.15-.26l.96.01q.3 0 .45-.26l.48-.84q.15-.26.3 0m-2.4 13.94V17a2.25 2.25 0 0 1 4.5 0v4.25");
}

.s4sbvmkdl {
  d: path("M3.25 20.5V10.25q0-.75.64-1.14l7.47-4.47q.64-.39 1.28 0l7.47 4.47q.64.39.64 1.14V20.5q0 .75-.75.75H4q-.75 0-.75-.75");
}
</style><g class="hntgybcog"><path class="s4sbvmkdl"/><path class="ldrfxdurj"/></g>`,
		"fallback": "iconoven:synagogue-building",
	});
}

export default Component;
