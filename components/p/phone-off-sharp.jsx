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
		"content": `<style>.fxtwwswpk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 16C5.105 13.105 3 9.418 3 5V3h6l2 5l-3 3l2 3m7-1l4 2v6h-2c-2.878 0-5.667-.67-8-2m-9 3L22 2");
}
</style><path class="fxtwwswpk"/>`,
		"fallback": "coolicons:phone-off-sharp",
	});
}

export default Component;
