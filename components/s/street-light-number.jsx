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
		"content": `<style>.etjwxybfj {
  d: path("M4 21.5h6m-3 0V9a6 6 0 0 1 6-6");
}

.l2il46bwl {
  d: path("M12 3h8l-2 3.5h-4Zm4.5 13.5l2-1.5v6.5m-2 0h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="etjwxybfj"/><path class="l2il46bwl"/></g>`,
		"fallback": "uix-sharp:street-light-number",
	});
}

export default Component;
