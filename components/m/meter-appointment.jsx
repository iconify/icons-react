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
		"content": `<style>.px7fem92t {
  d: path("M7 17.5a5 5 0 0 1 10 0m-5 0l1.5-1.5");
}

.qcw5wwb5t {
  d: path("M3.5 4.5h17V21h-17Zm4.5-2v4m8-4v4m-12.5 3h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qcw5wwb5t"/><path class="px7fem92t"/></g>`,
		"fallback": "uix-sharp:meter-appointment",
	});
}

export default Component;
