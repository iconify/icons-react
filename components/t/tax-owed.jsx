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
		"content": `<style>.egvzcai4f {
  d: path("M6 8.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6 0V18m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whcxf3shl {
  d: path("M15.2 21.5H3.5v-19H17v9.2M7 15.5l7-8");
}
</style><g class="ulnmmdpxh"><path class="whcxf3shl"/><path class="egvzcai4f"/></g>`,
		"fallback": "uix-sharp:tax-owed",
	});
}

export default Component;
