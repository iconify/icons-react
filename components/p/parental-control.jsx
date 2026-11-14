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
		"content": `<style>.ccrcypbbk {
  d: path("M12.2 17.5H2.5V3h19v11M11 17.5v3m-4 0h5.2m2.8-3h6v4h-6Z");
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
</style><g class="ulnmmdpxh"><path class="ccrcypbbk"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:parental-control",
	});
}

export default Component;
