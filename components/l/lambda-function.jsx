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
		"content": `<style>.arfzx2cnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h2q1.75 0 2.5 1.5l7 14q.75 1.5 2.5 1.5m-7.25-11L5 20.5");
}
</style><path class="arfzx2cnd"/>`,
		"fallback": "uix-sharp:lambda-function",
	});
}

export default Component;
