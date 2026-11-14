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
		"content": `<style>.r4m91934e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5.5h15V11h-15ZM12 11v3m-2 0h4v7.5h-4ZM8.5 2.5v3m3.5-3v3m3.5-3v3");
}
</style><path class="r4m91934e"/>`,
		"fallback": "uix-sharp:microneedling",
	});
}

export default Component;
