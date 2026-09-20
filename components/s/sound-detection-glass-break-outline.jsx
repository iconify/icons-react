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
		"content": `<style>.tjhltorqj {
  fill: currentColor;
  d: path("M4 20V4h16v16zM5 5v9.712l4.5-4.525l4.02 4.019L19 8.05V5zm0 14h14V9.55l-5.52 6.194l-3.98-3.98L5 16.289z");
}
</style><path class="tjhltorqj"/>`,
		"fallback": "material-symbols-light:sound-detection-glass-break-outline",
	});
}

export default Component;
