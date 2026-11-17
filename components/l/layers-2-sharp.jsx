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
		"content": `<style>.pcqmokbkn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.182 12L2 16.5L12 22L22 16.5L13.818 12M12 2L22 7.5L12 13L2 7.5L12 2Z");
}
</style><path class="pcqmokbkn"/>`,
		"fallback": "keyline-icons:layers-2-sharp",
	});
}

export default Component;
