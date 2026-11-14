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
		"content": `<style>.a-okhcbyk {
  d: path("m9.75 10l5.75 3.75l-5.75 3.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_qumib3l {
  d: path("M2.5 7h19v13.5h-19Zm6-4.25L12 7l3.5-4.25");
}
</style><g class="ulnmmdpxh"><path class="x_qumib3l"/><path class="a-okhcbyk"/></g>`,
		"fallback": "uix-sharp:var-review",
	});
}

export default Component;
