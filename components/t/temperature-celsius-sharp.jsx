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
		"content": `<style>.ujdxm56gb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 8a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3M3 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="ujdxm56gb"/>`,
		"fallback": "coolicons:temperature-celsius-sharp",
	});
}

export default Component;
