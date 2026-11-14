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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-bfraciy {
  d: path("M3.5 3v8.5c0 1.1.9 2 2 2s2-.9 2-2V3M10 3v8.5c0 1.1.9 2 2 2s2-.9 2-2V3m2.5 0v8.5c0 1.1.9 2 2 2s2-.9 2-2V3");
}

.xf9m4yzvw {
  fill: currentColor;
  d: path("M3.5 8.5h4v3c0 1.1-.9 2-2 2s-2-.9-2-2Zm6.5 0h4v3c0 1.1-.9 2-2 2s-2-.9-2-2Zm6.5 0h4v3c0 1.1-.9 2-2 2s-2-.9-2-2Z");
}

.ym1by1zqg {
  d: path("M3 18.5h17.5m-2.75-2.75l2.75 2.75l-2.75 2.75");
}
</style><g class="ulnmmdpxh"><path class="w-bfraciy"/><path class="xf9m4yzvw"/><path class="ym1by1zqg"/></g>`,
		"fallback": "uix-sharp:lab-queue",
	});
}

export default Component;
