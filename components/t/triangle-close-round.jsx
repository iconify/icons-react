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
		"content": `<style>.fz0a0j8fe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14.986 5.675l5.5 9C21.912 17.007 20.233 20 17.5 20h-11c-2.733 0-4.412-2.993-2.986-5.325l5.5-9c1.364-2.233 4.608-2.233 5.972 0M10 12l4 4m0-4l-4 4");
}
</style><path class="fz0a0j8fe"/>`,
		"fallback": "coolicons:triangle-close-round",
	});
}

export default Component;
