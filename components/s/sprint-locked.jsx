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
		"content": `<style>.dm_wopyrf {
  d: path("M16.5 17.5v-1a1.5 1.5 0 0 1 3 0v1");
}

.rxf-gu9bc {
  d: path("M11 19.5a8.5 8.5 0 1 1 8.5-8.5m-2.25-2.25L19.5 11l2.25-2.25M15 17.5h6v4h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rxf-gu9bc"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:sprint-locked",
	});
}

export default Component;
