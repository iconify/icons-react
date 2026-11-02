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
		"content": `<style>.c3e8c1bcd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16 9l-4-4l-4 4m0 6l4 4l4-4");
}
</style><path class="c3e8c1bcd"/>`,
		"fallback": "coolicons:unfold-more-duotone-sharp",
	});
}

export default Component;
