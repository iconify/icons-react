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
		"content": `<style>.ka90l1-wp {
  fill: currentColor;
  d: path("M16.25 17.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.l8k1b59ls {
  fill: currentColor;
  d: path("M11.472 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.682 0 1.339.058 1.96.169");
}

.lf0-u1c8y {
  d: path("M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.n1npu_o6y {
  d: path("M17.75 14.25h.01m2.49 1h.01m.99 2.5h.01m-1.01 2.5h.01m-2.51 1h.01m-2.51-1h.01m-1.01-2.5h.01m.99-2.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l8k1b59ls"/><path class="lf0-u1c8y"/><path class="ka90l1-wp"/><path class="n1npu_o6y"/></g>`,
		"fallback": "uix-sharp:sunburn",
	});
}

export default Component;
