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
		"content": `<style>.rt6symeka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 3.5a1.54 1.54 0 0 0-1.11.5l-4 4v15.85l13.05-13.06L25.11 4A1.54 1.54 0 0 0 24 3.5M11.45 15.4L4 22.89a1.58 1.58 0 0 0 0 2.22l7.49 7.49Zm25.75.65l-7.94 8l6.83 6.83l1.11 1.11l6.8-6.88a1.58 1.58 0 0 0 0-2.22ZM24 29.26l-5.11 5.12V40l4 4a1.58 1.58 0 0 0 2.22 0l6.83-6.84l-1.1-1.1h0Z");
}
</style><path class="rt6symeka"/>`,
		"fallback": "arcticons:kodi",
	});
}

export default Component;
