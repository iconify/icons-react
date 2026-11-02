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
		"content": `<style>.cmqyipb7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3c0 4 5 9 9 9c-4 0-9 5-9 9c0-4-5-9-9-9c4 0 9-5 9-9");
}
</style><path class="cmqyipb7c"/>`,
		"fallback": "coolicons:sparkle",
	});
}

export default Component;
