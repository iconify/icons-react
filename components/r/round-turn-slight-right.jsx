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
		"content": `<style>.vndq6ubqz {
  fill: currentColor;
  d: path("M12.34 5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1v3.66c0 .55-.45 1-1 1s-1-.45-1-1V7.41l-5 5V19c0 .55-.45 1-1 1s-1-.45-1-1v-6.58c0-.53.21-1.04.59-1.41l5-5h-1.24A1.02 1.02 0 0 1 12.34 5");
}
</style><path class="vndq6ubqz"/>`,
		"fallback": "ic:round-turn-slight-right",
	});
}

export default Component;
