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
		"content": `<style>.dpo4tbb1k {
  d: path("M7.5 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm11-5.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.juyethb5f {
  d: path("M3.5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm2.5 12c0-2 2-3 4.5-3s4.5 1 4.5 3m-4.5-5v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="juyethb5f"/><path class="dpo4tbb1k"/></g>`,
		"fallback": "uix-sharp:recorded-interview",
	});
}

export default Component;
