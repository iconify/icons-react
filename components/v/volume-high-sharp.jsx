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
		"content": `<style>.qnrbd_bay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 4v16l-4-4H3V8h4zm4 4a7.21 7.21 0 0 1 0 8m3-11a11.4 11.4 0 0 1 0 14");
}
</style><path class="qnrbd_bay"/>`,
		"fallback": "coolicons:volume-high-sharp",
	});
}

export default Component;
