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
		"content": `<style>.gyk8u65mf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 4.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-1 16.75V19c-6-1-6-9 3.5-9s9.5 8 3.5 9v2.5M12 17v4.5");
}
</style><path class="gyk8u65mf"/>`,
		"fallback": "uix-sharp:person-plus-size",
	});
}

export default Component;
