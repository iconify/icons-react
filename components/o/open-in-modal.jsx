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
		"content": `<style>.o0uxpabcc {
  d: path("M2.5 3.5h19v17h-19Z");
}

.rvhws1igo {
  d: path("M7 8h10v8H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0uxpabcc"/><path class="rvhws1igo"/></g>`,
		"fallback": "uix-sharp:open-in-modal",
	});
}

export default Component;
