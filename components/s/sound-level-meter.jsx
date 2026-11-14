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
		"content": `<style>.g30sj5bid {
  d: path("M4 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2V13l-2 8.5H6L4 13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yiuwv1axg {
  d: path("M6.25 8.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm10.225-2.475a3.5 3.5 0 0 1 0 4.95m2.887-6.975a7 7 0 0 1 0 9");
}
</style><g class="ulnmmdpxh"><path class="g30sj5bid"/><path class="yiuwv1axg"/></g>`,
		"fallback": "uix-sharp:sound-level-meter",
	});
}

export default Component;
