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
		"content": `<style>.kyxfmv_nh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 6L12 12L2 18L2 6ZM17 5L17 19M22 5L22 19");
}
</style><path class="kyxfmv_nh"/>`,
		"fallback": "keyline-icons:play-pause-sharp",
	});
}

export default Component;
