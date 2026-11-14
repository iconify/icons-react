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
		"content": `<style>.l1xn5bc5a {
  d: path("M2.5 17a9.5 9.5 0 0 1 19 0M12 17l5-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wmcwji7ui {
  d: path("M10.5 17a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-8 3.5h19");
}
</style><g class="ulnmmdpxh"><path class="l1xn5bc5a"/><path class="wmcwji7ui"/></g>`,
		"fallback": "uix-sharp:risk-meter",
	});
}

export default Component;
