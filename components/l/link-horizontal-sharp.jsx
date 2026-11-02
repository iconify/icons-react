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
		"content": `<style>.n2lv_5byc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 8H7a4 4 0 1 0 0 8h2m6-8h2a4 4 0 1 1 0 8h-2m-7-4h8");
}
</style><path class="n2lv_5byc"/>`,
		"fallback": "coolicons:link-horizontal-sharp",
	});
}

export default Component;
