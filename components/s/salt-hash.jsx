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
		"content": `<style>.aptzebc_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 8h8l1 12H7Zm1-4.5h6V8H9Zm1.5 9.5h.01m2.99 0h.01M12 16.5h.01");
}
</style><path class="aptzebc_y"/>`,
		"fallback": "uix-sharp:salt-hash",
	});
}

export default Component;
