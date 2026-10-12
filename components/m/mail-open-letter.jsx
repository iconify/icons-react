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
		"content": `<style>.b-8fb616b {
  d: path("m3.5 9.25l7.1 4.6c.85.55 1.95.55 2.8 0l7.1-4.6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8vzhix2i {
  d: path("M2.75 10.25a2.5 2.5 0 0 1 1.15-2.1l6.75-4.4a2.5 2.5 0 0 1 2.7 0l6.75 4.4a2.5 2.5 0 0 1 1.15 2.1v7.5a2.5 2.5 0 0 1-2.5 2.5H5.25a2.5 2.5 0 0 1-2.5-2.5Z");
}
</style><g class="hntgybcog"><path class="j8vzhix2i"/><path class="b-8fb616b"/></g>`,
		"fallback": "iconoven:mail-open-letter",
	});
}

export default Component;
