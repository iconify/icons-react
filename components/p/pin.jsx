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
		"content": `<style>.uleem9bbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h4a2 2 0 1 1 0 4a1 1 0 0 0-1 1v3c0 2 4 2 4 4v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1c0-2 4-2 4-4V8a1 1 0 0 0-1-1a2 2 0 1 1 0-4Zm0 14v4");
}
</style><path class="uleem9bbm"/>`,
		"fallback": "coolicons:pin",
	});
}

export default Component;
