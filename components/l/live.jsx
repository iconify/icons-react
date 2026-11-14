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
		"content": `<style>.dyh4jubci {
  d: path("M15.889 8.111a5.5 5.5 0 0 1 0 7.778m-7.778 0a5.5 5.5 0 0 1 0-7.778m11.166-2.217a9.5 9.5 0 0 1 0 12.212m-14.554 0a9.5 9.5 0 0 1 0-12.212");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-v207blm {
  fill: currentColor;
  d: path("M10.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="w-v207blm"/><path class="dyh4jubci"/></g>`,
		"fallback": "uix-sharp:live",
	});
}

export default Component;
