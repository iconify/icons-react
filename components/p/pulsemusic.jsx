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
		"content": `<style>.fh3x0vjnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.21 9.76V9.7H4.5v6.57L12.68 24c-.08-.61 0-7.73 0-7.73H28.8a7.21 7.21 0 0 1 0 14.41c-5.55 0-9.18-1.72-9.18-6.68h-6.94c0 9.2 5.3 14.3 16.52 14.3a14.29 14.29 0 0 0 1-28.54Z");
}
</style><path class="fh3x0vjnp"/>`,
		"fallback": "arcticons:pulsemusic",
	});
}

export default Component;
