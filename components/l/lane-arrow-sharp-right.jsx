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
		"content": `<style>.d4p0wgucb {
  d: path("M19 11.5v5h-5");
}

.syt9yu79f {
  d: path("M7 20.5v-16l12 12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="syt9yu79f"/><path class="d4p0wgucb"/></g>`,
		"fallback": "uix-sharp:lane-arrow-sharp-right",
	});
}

export default Component;
