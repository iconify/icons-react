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
		"content": `<style>.budle8bnq {
  d: path("M12.05 18h-4.8V8h5v8.8M8.5 8V5H11v3M5.5 20.75h.01m5.49 0h.01m7.99-6A3.5 3.5 0 1 0 21.75 19A2.75 2.75 0 0 1 19 14.75Z");
}

.k8foptb4o {
  d: path("M2.5 3h2v15H12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k8foptb4o"/><path class="budle8bnq"/></g>`,
		"fallback": "uix-sharp:night-porter",
	});
}

export default Component;
