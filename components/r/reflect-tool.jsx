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
		"content": `<style>.t59e002ln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6v12H3.5Zm6 0v12h5.5Zm-3-3.5v3M12 9v6m0 3.5v3");
}
</style><path class="t59e002ln"/>`,
		"fallback": "uix-sharp:reflect-tool",
	});
}

export default Component;
