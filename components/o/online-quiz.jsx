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
		"content": `<style>.a9fv-b28k {
  d: path("M10.5 8c0-1.25.6-1.75 1.5-1.75s1.5.5 1.5 1.5C13.5 9.5 12 9.5 12 11");
}

.iau37ab1m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="a9fv-b28k"/></g>`,
		"fallback": "uix-sharp:online-quiz",
	});
}

export default Component;
