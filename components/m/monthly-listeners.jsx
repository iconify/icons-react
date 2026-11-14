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
		"content": `<style>.grc6u9b2f {
  d: path("M3.5 12.5V10A7.25 7.25 0 0 1 18 10v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xukl0491m {
  d: path("M2.5 10H7v5.5H2.5Zm14.1 5.5h-2.1V10H19v4.4m-4.5 7.1l3-3L19 20l2.75-2.75m-2.25 0h2.25v2.25");
}
</style><g class="ulnmmdpxh"><path class="grc6u9b2f"/><path class="xukl0491m"/></g>`,
		"fallback": "uix-sharp:monthly-listeners",
	});
}

export default Component;
