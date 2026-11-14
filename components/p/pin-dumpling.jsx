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
		"content": `<style>.jl7ah9axc {
  d: path("M3 17c0-6 4-9 9-12.5C17 8 21 11 21 17q0 2.5-2.5 2.5h-13Q3 19.5 3 17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v8-vjjbdk {
  d: path("M12 4.5q-2.25 3.5-3 7m3-7q2.25 3.5 3 7");
}
</style><g class="ulnmmdpxh"><path class="jl7ah9axc"/><path class="v8-vjjbdk"/></g>`,
		"fallback": "uix-sharp:pin-dumpling",
	});
}

export default Component;
