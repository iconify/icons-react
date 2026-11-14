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
		"content": `<style>.q1d3ppbrl {
  d: path("M5.464 9L9 5.464L12.536 9L9 12.536Zm11.908 6.839l.052-1.038h1.152l.052 1.038l.929.537l.925-.474l.576.997l-.873.564v1.074l.873.564l-.576.997l-.925-.474l-.929.537l-.052 1.038h-1.152l-.052-1.038l-.929-.537l-.925.474l-.576-.997l.873-.564v-1.074l-.873-.564l.576-.997l.925.474Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zn5vtx2pl {
  d: path("m2.99 10.768l7.778-7.778a1 1 0 0 1 1.414 0l2.828 2.828a1 1 0 0 1 0 1.414L7.232 15.01a1 1 0 0 1-1.414 0L2.99 12.182a1 1 0 0 1 0-1.414Z");
}
</style><g class="ulnmmdpxh"><path class="zn5vtx2pl"/><path class="q1d3ppbrl"/></g>`,
		"fallback": "uix-sharp:patch-management",
	});
}

export default Component;
