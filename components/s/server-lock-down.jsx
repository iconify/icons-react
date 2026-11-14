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

.slf5v9bmx {
  d: path("M12.2 21H2.5V2.5h15v9.7m-15-3.45h15M2.5 15h9.7M6 5.75h.01M6 12h.01M6 18h.01m8.99-.5h6v4h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="slf5v9bmx"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:server-lock-down",
	});
}

export default Component;
