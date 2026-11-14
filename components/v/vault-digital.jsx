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
		"content": `<style>.i5r5mmsxy {
  d: path("M2.5 3h19v13h-19ZM12 16v4m-4 .5h8");
}

.r0ra_jbyu {
  d: path("M8 9.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.s-rhvt4ku {
  d: path("M10.75 9.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM12 8.25V5.5m1 4.5l2.5 1.5M11 10l-2.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i5r5mmsxy"/><path class="r0ra_jbyu"/><path class="s-rhvt4ku"/></g>`,
		"fallback": "uix-sharp:vault-digital",
	});
}

export default Component;
