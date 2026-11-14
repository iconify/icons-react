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
		"content": `<style>.bara7tbgf {
  d: path("M2.5 15C7 15 7 9 12 9s5 6 9.5 6");
}

.k-llulbzs {
  d: path("M2.5 9C7 9 7 15 12 15s5-6 9.5-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k-llulbzs"/><path class="bara7tbgf"/></g>`,
		"fallback": "uix-sharp:twisted-pair",
	});
}

export default Component;
