import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}

.qatj1mk7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.2 25.4c0-2.2 1.8-3.9 3.9-3.9h0m-3.9-.1v10.5M14.9 16.1v10.5c0 2.9 2.3 5.2 5.2 5.2s5.2-2.3 5.2-5.2V16.1");
}
</style><path class="qatj1mk7y"/><path class="ll0g54h-q"/>`,
		"fallback": "arcticons:urforms",
	});
}

export default Component;
