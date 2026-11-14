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
		"content": `<style>.cozt5abkl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.625 2.5h.75A2.625 2.625 0 0 1 15 5.125v.75A2.625 2.625 0 0 1 12.375 8.5h-.75A2.625 2.625 0 0 1 9 5.875v-.75A2.625 2.625 0 0 1 11.625 2.5m-6.5 13h.75A2.625 2.625 0 0 1 8.5 18.125v.75A2.625 2.625 0 0 1 5.875 21.5h-.75A2.625 2.625 0 0 1 2.5 18.875v-.75A2.625 2.625 0 0 1 5.125 15.5m13 0h.75a2.625 2.625 0 0 1 2.625 2.625v.75a2.625 2.625 0 0 1-2.625 2.625h-.75a2.625 2.625 0 0 1-2.625-2.625v-.75a2.625 2.625 0 0 1 2.625-2.625M12 8.5V12m-6.5 3.5V12h13v3.5");
}
</style><path class="cozt5abkl"/>`,
		"fallback": "uix:process-tree",
	});
}

export default Component;
