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
		"content": `<style>.cd22zbjfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h12v10h-12Zm12 3h7v9h-7Zm-6 7v3.5m-3 0h6m1-7.5H17");
}
</style><path class="cd22zbjfg"/>`,
		"fallback": "uix-sharp:monitor-extend",
	});
}

export default Component;
