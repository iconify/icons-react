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
		"content": `<style>.iyt5hvktd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l5 4h-3l5 5h-4l6 6H3l6-6H5l5-5H7zm0 15v3");
}
</style><path class="iyt5hvktd"/>`,
		"fallback": "coolicons:tree-pine-sharp",
	});
}

export default Component;
