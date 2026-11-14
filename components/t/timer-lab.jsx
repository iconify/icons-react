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
		"content": `<style>.dmdya6b2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19v13h-19Zm7-3h5m-9 9.5H9m6 0h3.5M12 11.25h.01m-.01 3.5h.01");
}
</style><path class="dmdya6b2y"/>`,
		"fallback": "uix-sharp:timer-lab",
	});
}

export default Component;
