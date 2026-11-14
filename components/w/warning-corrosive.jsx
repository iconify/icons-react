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
		"content": `<style>.ehs209b4w {
  d: path("m12 3l9.5 17.5h-19Z");
}

.g-0ap6bdq {
  d: path("M12 9s-1.75 2.5-1.75 3.5a1.75 1.75 0 0 0 3.5 0C13.75 11.5 12 9 12 9Zm-4 8.25h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ehs209b4w"/><path class="g-0ap6bdq"/></g>`,
		"fallback": "uix-sharp:warning-corrosive",
	});
}

export default Component;
