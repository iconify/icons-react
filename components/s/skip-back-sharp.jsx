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
		"content": `<style>.jn_7ebboi {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 19L8.5108 12L19 5L19 19ZM5 4L5 20");
}
</style><path class="jn_7ebboi"/>`,
		"fallback": "keyline-icons:skip-back-sharp",
	});
}

export default Component;
