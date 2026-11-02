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
		"content": `<style>.l9zsbjcou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 6l4-2l8 4l-8 4l-8-4zm-4 6l8 4l8-4M4 16l8 4l8-4");
}
</style><path class="l9zsbjcou"/>`,
		"fallback": "coolicons:layers-sharp",
	});
}

export default Component;
