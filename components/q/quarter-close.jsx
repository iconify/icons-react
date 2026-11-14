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

.p--yl9bek {
  d: path("M12.2 19.5H2.5V3h17v9.5M7 2.5V5m8-2.5V5M2.5 7.75h17m-8.5 0V19.5m-8.5-6.25h12.7M15 17.5h6v4h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p--yl9bek"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:quarter-close",
	});
}

export default Component;
