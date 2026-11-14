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
		"content": `<style>.hd0dlwb1v {
  fill: currentColor;
  d: path("M6.5 11.75a1.75 1.25 0 1 0 3.5 0a1.75 1.25 0 1 0-3.5 0Zm4-4a1.75 1.25 0 1 0 3.5 0a1.75 1.25 0 1 0-3.5 0Zm3.75 4a1.75 1.25 0 1 0 3.5 0a1.75 1.25 0 1 0-3.5 0Z");
}

.t_yq4tp9l {
  d: path("M6.5 16c-3 0-4-3.5-2-5.5C3.5 6.5 7 4 10 5c1.5-2.5 5.5-2.5 6.5.5c3 0 5 3 3.5 6c1.5 2.5-.5 5-3 4.5Zm5.5 0v5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t_yq4tp9l"/><path class="hd0dlwb1v"/></g>`,
		"fallback": "uix-sharp:lemon-tree",
	});
}

export default Component;
