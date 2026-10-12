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
		"content": `<style>.s4niwbbce {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.75C3.5 12 8.5 5 15 5c3.5 0 6.25 2 6.25 5c0 2.25-1.75 3.75-3.75 3.75c-1.75 0-3-1.25-3-2.75V9.583l1.25-.833C11 9 8.5 14.5 8.5 20.75Zm8.05-1.29l9.4-3.42");
}
</style><path class="s4niwbbce"/>`,
		"fallback": "iconoven:wave-surf-sharp",
	});
}

export default Component;
