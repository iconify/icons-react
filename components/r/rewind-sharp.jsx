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
		"content": `<style>.yx855t-jn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20.02 6.61l-6.54 4.53l-1.23.86l1.23.86l6.54 4.53l1.23.86V5.75zm-9.5 0l-6.54 4.53l-1.23.86l1.23.86l6.54 4.53l1.23.86V5.75z");
}
</style><path class="yx855t-jn"/>`,
		"fallback": "iconoven:rewind-sharp",
	});
}

export default Component;
