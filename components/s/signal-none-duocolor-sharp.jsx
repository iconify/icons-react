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
		"content": `<style>.i21l4cbtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 0.4;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 20h.01M10 20h.01M14 20h.01M18 20h.01");
}
</style><path class="i21l4cbtl"/>`,
		"fallback": "coolicons:signal-none-duocolor-sharp",
	});
}

export default Component;
