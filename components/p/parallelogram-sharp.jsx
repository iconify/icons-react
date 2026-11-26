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
		"content": `<style>.ss18un25g {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.921 4L21.999 4L18.079 20L2.001 20Z");
}
</style><path class="ss18un25g"/>`,
		"fallback": "keyline-icons:parallelogram-sharp",
	});
}

export default Component;
