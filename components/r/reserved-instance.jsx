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
		"content": `<style>.b_afn1bxu {
  d: path("M12.2 20.5H3v-16h16v7.8M3 9.5h16m-11-7v4m6-4v4M6.5 14H10m5 3.5h6v4h-6Z");
}

.dm_wopyrf {
  d: path("M16.5 17.5v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b_afn1bxu"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:reserved-instance",
	});
}

export default Component;
