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
		"content": `<style>.l_y-qwucx {
  d: path("M7.5 10h9L15 18H9Zm4.5 0V5m0 2.25C12 5.25 10.5 4 8 4c0 2 1.5 3.25 4 3.25M12 6c0-2 1.5-3.25 4-3.25c0 2-1.5 3.25-4 3.25");
}

.or2w3lbjj {
  d: path("m4 12l2 9.5h12l2-9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="or2w3lbjj"/><path class="l_y-qwucx"/></g>`,
		"fallback": "uix-sharp:repotting",
	});
}

export default Component;
