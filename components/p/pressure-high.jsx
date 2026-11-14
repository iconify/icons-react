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
		"content": `<style>.xupb5bc8u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 19a9 9 0 1 1 15 0M12 14l4.25-4.25M12 14h.01");
}
</style><path class="xupb5bc8u"/>`,
		"fallback": "uix-sharp:pressure-high",
	});
}

export default Component;
