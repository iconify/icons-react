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
		"content": `<style>.xdbpptwau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5h2l3 5h13v4h-6l-5 5H8l2-5H5z");
}
</style><path class="xdbpptwau"/>`,
		"fallback": "coolicons:plane-side-duocolor-sharp",
	});
}

export default Component;
