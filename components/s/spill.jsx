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
		"content": `<style>.g0_wrj4el {
  d: path("M12.25 8.5a1.75 5.5 0 1 0 3.5 0a1.75 5.5 0 1 0-3.5 0ZM5.5 19.25c0-2 3.5-2.25 6-1.75c2.5-.75 9-1 9 1.5S15 21.25 12 21c-3.5.5-6.5.25-6.5-1.75Z");
}

.rn-yxh0-a {
  d: path("M14 3L4 5v7l10 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rn-yxh0-a"/><path class="g0_wrj4el"/></g>`,
		"fallback": "uix-sharp:spill",
	});
}

export default Component;
